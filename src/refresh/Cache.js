import Page from './Page';
import util from '../util/util';
import inject from '../util/inject';
import blur from '../style/blur';
import tf from '../style/transform';
import mx from '../math/matrix';

class Cache {
  constructor(w, h, bbox, page, pos) {
    this.__init(w, h, bbox, page, pos);
  }

  __init(w, h, bbox, page, pos) {
    this.__width = w;
    this.__height = h;
    this.__bbox = bbox;
    this.__page = page;
    this.__pos = pos;
    let [x, y] = page.getCoords(pos);
    // 四周各+1px的扩展
    this.__coords = [x + 1, y + 1];
    if(page.canvas) {
      this.__enabled = true;
      let ctx = page.ctx;
      ctx.setTransform([1, 0, 0, 1, 0, 0]);
      ctx.globalAlpha = 1;
      if(typeof karas !== 'undefined' && karas.debug) {
        page.canvas.setAttribute('size', page.size);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.beginPath();
        ctx.rect(x + 1, y + 1, page.size - 2, page.size - 2);
        ctx.closePath();
        ctx.fill();
      }
    }
  }

  __appendData(sx1, sy1) {
    this.sx1 = sx1; // padding原点坐标
    this.sy1 = sy1;
    let [xc, yc] = this.coords;
    let bbox = this.bbox;
    this.dx = xc - bbox[0]; // cache坐标和box原点的差值
    this.dy = yc - bbox[1];
    this.dbx = sx1 - bbox[0]; // 原始x1/y1和box原点的差值
    this.dby = sy1 - bbox[1];
  }

  clear() {
    let ctx = this.ctx;
    if(this.enabled && ctx && this.available) {
      ctx.setTransform([1, 0, 0, 1, 0, 0]);
      let [x, y] = this.coords;
      let size = this.page.size;
      ctx.clearRect(x - 1, y - 1, size, size);
    }
    this.__available = false;
  }

  release() {
    if(this.enabled) {
      this.clear();
      this.page.del(this.pos);
      this.__page = null;
      this.__enabled = false;
    }
  }

  reset(bbox) {
    // 尺寸没变复用之前的并清空
    if(util.equalArr(this.bbox, bbox) && this.enabled) {
      this.clear();
      return;
    }
    this.release();
    let w = Math.ceil(bbox[2] - bbox[0]);
    let h = Math.ceil(bbox[3] - bbox[1]);
    w += 2;
    h += 2;
    // 防止边的精度问题四周各+1px，宽高即+2px
    let res = Page.getInstance(Math.max(w, h));
    if(!res) {
      this.__enabled = false;
      return;
    }
    let { page, pos } = res;
    this.__init(w, h, bbox, page, pos);
  }

  // 是否功能可用，生成离屏canvas及尺寸超限
  get enabled() {
    return this.__enabled;
  }

  // 是否有可用缓存内容
  get available() {
    return this.enabled && this.__available;
  }

  get bbox() {
    return this.__bbox;
  }

  get page() {
    return this.__page;
  }

  get canvas() {
    return this.page.canvas;
  }

  get ctx() {
    return this.page.ctx;
  }

  get size() {
    return this.page.size;
  }

  get width() {
    return this.__width;
  }

  get height() {
    return this.__height;
  }

  get pos() {
    return this.__pos;
  }

  get coords() {
    return this.__coords;
  }

  static NUM = 5;

  static getInstance(bbox) {
    if(isNaN(bbox[0]) || isNaN(bbox[1]) || isNaN(bbox[2]) || isNaN(bbox[3])) {
      return;
    }
    let w = Math.ceil(bbox[2] - bbox[0]);
    let h = Math.ceil(bbox[3] - bbox[1]);
    w += 2;
    h += 2;
    // 防止边的精度问题四周各+1px，宽高即+2px
    let res = Page.getInstance(Math.max(w, h));
    if(!res) {
      return;
    }
    let { page, pos } = res;
    return new Cache(w, h, bbox, page, pos);
  }

  static genMask(cache) {
    let { size, sx1, sy1, width, height } = cache;
    let offScreen = inject.getCacheCanvas(width, height);
    offScreen.coords = [1, 1];
    offScreen.size = size;
    offScreen.sx1 = sx1;
    offScreen.sy1 = sy1;
    offScreen.dbx = cache.dbx;
    offScreen.dby = cache.dby;
    offScreen.width = width;
    offScreen.height = height;
    return offScreen;
  }

  /**
   * 复制cache的一块出来单独作为cacheFilter，尺寸边距保持一致，用webgl的滤镜
   * @param cache
   * @param v
   * @returns {{canvas: *, ctx: *, release(): void, available: boolean, draw()}}
   */
  static genOffScreenBlur(cache, v) {
    let { coords: [x, y], size, canvas, sx1, sy1, width, height } = cache;
    let offScreen = inject.getCacheCanvas(width, height);
    offScreen.ctx.drawImage(canvas, x - 1, y - 1, width, height, 0, 0, width, height);
    offScreen.draw();
    let cacheFilter = inject.getCacheWebgl(width, height);
    blur.gaussBlur(offScreen, cacheFilter, v, width, height);
    cacheFilter.coords = [1, 1];
    cacheFilter.size = size;
    cacheFilter.sx1 = sx1;
    cacheFilter.sy1 = sy1;
    cacheFilter.dbx = cache.dbx;
    cacheFilter.dby = cache.dby;
    cacheFilter.width = width;
    cacheFilter.height = height;
    return cacheFilter;
  }

  /**
   * bbox变化时直接用老的cache内容重设bbox
   * @param cache
   * @param bbox
   */
  static updateCache(cache, bbox) {
    let old = cache.bbox;
    if(!util.equalArr(bbox, old)) {
      let dx = old[0] - bbox[0];
      let dy = old[1] - bbox[1];
      let newCache = Cache.getInstance(bbox);
      if(newCache && newCache.enabled) {
        let { coords: [ox, oy], canvas, width, height } = cache;
        let { coords: [nx, ny] } = newCache;
        newCache.sx1 = cache.sx1;
        newCache.sy1 = cache.sy1;
        newCache.dx = cache.dx + dx;
        newCache.dy = cache.dy + dy;
        newCache.dbx = cache.dbx + dx;
        newCache.dby = cache.dby + dy;
        newCache.ctx.drawImage(canvas, ox - 1, oy - 1, width, height, dx + nx - 1, dy + ny - 1, width, height);
        newCache.__available = true;
        cache.release();
        return newCache;
      }
    }
    else {
      return cache;
    }
  }

  static drawCache(source, target, transform, matrix, tfo, inverse) {
    let { coords: [tx, ty], sx1, sy1, ctx, dbx, dby } = target;
    let { coords: [x, y], canvas, sx1: sx2, sy1: sy2, dbx: dbx2, dby: dby2, width, height } = source;
    let dx = tx + sx2 - sx1 + dbx - dbx2;
    let dy = ty + sy2 - sy1 + dby - dby2;
    if(transform && matrix && tfo) {
      tfo[0] += dx;
      tfo[1] += dy;
      let m = tf.calMatrixByOrigin(transform, tfo);
      matrix = mx.multiply(matrix, m);
      if(inverse) {
        // 很多情况mask和target相同matrix，可简化计算
        if(util.equalArr(matrix, inverse)) {
          matrix = [1, 0, 0, 1, 0, 0];
        }
        else {
          inverse = mx.inverse(inverse);
          matrix = mx.multiply(matrix, inverse);
        }
      }
      ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
    }
    ctx.drawImage(canvas, x - 1, y - 1, width, height, dx - 1, dy - 1, width, height);
  }

  static drawMask(target, next, transform, tfo) {
    let cacheMask = Cache.genMask(target);
    let list = [];
    while(next && (next.isMask)) {
      list.push(next);
      next = next.next;
    }
    let { coords: [x, y], ctx, dbx, dby } = cacheMask;
    tfo[0] += x + dbx;
    tfo[1] += y + dby;
    let inverse = tf.calMatrixByOrigin(transform, tfo);
    // 先将mask本身绘制到cache上，再设置模式绘制dom本身，因为都是img所以1个就够了
    list.forEach(item => {
      let cacheFilter = item.__cacheFilter, cache = item.__cache;
      let source = cacheFilter && cacheFilter.available && cacheFilter;
      if(!source) {
        source = cache && cache.available && cache;
      }
      if(source) {
        ctx.globalAlpha = item.__opacity;
        Cache.drawCache(
          source, cacheMask,
          item.computedStyle.transform,
          [1, 0, 0, 1, 0, 0],
          item.computedStyle.transformOrigin.slice(0),
          inverse
        );
      }
      else {
        console.error('CacheMask is oversize');
      }
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-in';
    Cache.drawCache(target, cacheMask);
    ctx.globalCompositeOperation = 'source-over';
    cacheMask.draw(ctx);
    return cacheMask;
  }

  static mergeTotal(cacheTotal, __structs, index) {
    let ctx = cacheTotal.ctx;
    // 以top为基准matrix/opacity
    if(ctx.globalAlpha !== 1) {
      ctx.globalAlpha = 1;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // 先应用节点本身内容__cache
    let { node: { __cache }, lv, total } = __structs[index];
    if(__cache && __cache.__available) {
      Cache.drawCache(__cache, cacheTotal);
    }
    // 先序遍历所有子节点，遇到有__cacheTotal的可以跳过其子节点
    let opacityHash = {};
    let matrixHash = {};
    let lastMatrix;
    for(let i = index + 1; i < total; i++) {
      let { node, node: { __cacheTotal, __cache }, lv: lv2, total: total2 } = __structs[i];
      if(__cacheTotal && __cacheTotal.__available) {
        Cache.drawCache(__cacheTotal, cacheTotal);
        i += total;
      }
      else if(__cache && __cache.__available) {
        Cache.drawCache(__cache, cacheTotal);
      }
    }
  }
}

export default Cache;
