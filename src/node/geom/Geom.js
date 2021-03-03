import Xom from '../Xom';
import reset from '../../style/reset';
import css from '../../style/css';
import unit from '../../style/unit';
import enums from '../../util/enums';
import mode from '../mode';
import util from '../../util/util';
import level from '../../refresh/level';
import painter from '../../util/painter';
import transform from '../../style/transform';
import mx from '../../math/matrix';
import inject from '../../util/inject';

const {
  STYLE_KEY: {
    DISPLAY,
    MARGIN_TOP,
    MARGIN_RIGHT,
    MARGIN_BOTTOM,
    MARGIN_LEFT,
    PADDING_TOP,
    PADDING_RIGHT,
    PADDING_BOTTOM,
    PADDING_LEFT,
    WIDTH,
    HEIGHT,
    BORDER_TOP_WIDTH,
    BORDER_RIGHT_WIDTH,
    BORDER_BOTTOM_WIDTH,
    BORDER_LEFT_WIDTH,
    FILL,
    STROKE,
    STROKE_MITERLIMIT,
    STROKE_WIDTH,
    STROKE_LINECAP,
    STROKE_LINEJOIN,
    STROKE_DASHARRAY,
    STROKE_DASHARRAY_STR,
    FILL_RULE,
    VISIBILITY,
  },
  NODE_KEY: {
    NODE_CACHE_PROPS,
    NODE_CURRENT_PROPS,
    NODE_CURRENT_STYLE,
    NODE_IS_MASK,
    NODE_STYLE,
    NODE_CACHE,
    NODE_CACHE_TOTAL,
    NODE_CACHE_FILTER,
    NODE_CACHE_MASK,
    NODE_CACHE_OVERFLOW,
    NODE_DEFS_CACHE,
  }
} = enums;
const { AUTO, PX, PERCENT } = unit;
const { int2rgba, isNil, joinArr } = util;
const { canvasPolygon, svgPolygon } = painter;

const REGISTER = {};

class Geom extends Xom {
  constructor(tagName, props) {
    super(tagName, props);
    this.__isMulti = !!this.props.multi;
    let isClip = this.__isClip = !!this.props.clip;
    let isMask = this.__isMask = isClip || !!this.props.mask;
    let { style } = this;
    if(isMask) {
      style.background = null;
      style.border = null;
      style.boxShadow = null;
      style.mixBlendMode = 'normal';
    }
    this.__style = css.normalize(this.style, reset.DOM_ENTRY_SET.concat(reset.GEOM_ENTRY_SET));
    this.__currentStyle = util.extend({}, this.__style);
    this.__currentProps = util.clone(this.props);
    let config = this.__config;
    config[NODE_CACHE_PROPS] = this.__cacheProps = {};
    config[NODE_CURRENT_PROPS] = this.__currentProps;
    config[NODE_CURRENT_STYLE] = this.__currentStyle;
    config[NODE_IS_MASK] = isMask;
    config[NODE_STYLE] = this.__style;
  }

  __tryLayInline(w, total) {
    // 无children，直接以style的width为宽度，不定义则为0
    let { currentStyle: { [WIDTH]: width } } = this;
    if(width[1] === PX) {
      return w - width[0];
    }
    else if(width[1] === PERCENT) {
      return w - total * width[0] * 0.01;
    }
    return w;
  }

  __calAutoBasis(isDirectionRow, x, y, w, h, isVirtual) {
    let b = 0;
    let min = 0;
    let max = 0;
    let { currentStyle } = this;
    // 计算需考虑style的属性
    let {
      [WIDTH]: width,
      [HEIGHT]: height,
      [MARGIN_LEFT]: marginLeft,
      [MARGIN_TOP]: marginTop,
      [MARGIN_RIGHT]: marginRight,
      [MARGIN_BOTTOM]: marginBottom,
      [PADDING_LEFT]: paddingLeft,
      [PADDING_TOP]: paddingTop,
      [PADDING_RIGHT]: paddingRight,
      [PADDING_BOTTOM]: paddingBottom,
      [BORDER_TOP_WIDTH]: borderTopWidth,
      [BORDER_RIGHT_WIDTH]: borderRightWidth,
      [BORDER_BOTTOM_WIDTH]: borderBottomWidth,
      [BORDER_LEFT_WIDTH]: borderLeftWidth,
    } = currentStyle;
    let main = isDirectionRow ? width : height;
    if(main[1] !== AUTO) {
      b = max = main[0];
    }
    else if(main[1] === PERCENT) {
      b = max = main[0] * 0.01 * (isDirectionRow ? w : h);
    }
    // border也得计算在内
    if(isDirectionRow) {
      let mp = this.__calMp(marginLeft, w)
        + this.__calMp(marginRight, w)
        + this.__calMp(paddingLeft, w)
        + this.__calMp(paddingRight, w);
      let w2 = borderLeftWidth[0] + borderRightWidth[0] + mp;
      b += w2;
      max += w2;
      min += w2;
    }
    else {
      let mp = this.__calMp(marginTop, w)
        + this.__calMp(marginBottom, w)
        + this.__calMp(paddingTop, w)
        + this.__calMp(paddingBottom, w);
      let h2 = borderTopWidth[0] + borderBottomWidth[0] + mp;
      b += h2;
      max += h2;
      min += h2;
    }
    return [b, min, max];
  }

  __layoutBlock(data, isVirtual) {
    let { fixedWidth, fixedHeight, w, h } = this.__preLayout(data);
    this.__height = fixedHeight ? h : 0;
    if(isVirtual) {
      this.__width = fixedWidth ? w : 0;
      return;
    }
    this.__width = w;
    this.__ioSize(w, this.height);
    this.__marginAuto(this.currentStyle, data);
    this.__config[NODE_CACHE_PROPS] = this.__cacheProps = {};
  }

  __layoutFlex(data) {
    // 无children所以等同于block
    this.__layoutBlock(data);
  }

  __layoutInline(data) {
    let { fixedWidth, fixedHeight, x, y, w, h } = this.__preLayout(data);
    // 元素的width不能超过父元素w
    let tw = this.__width = fixedWidth ? w : x - data.x;
    let th = this.__height = fixedHeight ? h : y - data.y;
    this.__ioSize(tw, th);
    this.__config[NODE_CACHE_PROPS] = this.__cacheProps = {};
  }

  __calCache(renderMode, lv, ctx, defs, parent, __cacheStyle, currentStyle, computedStyle,
             clientWidth, clientHeight, offsetWidth, offsetHeight,
             borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth,
             paddingTop, paddingRight, paddingBottom, paddingLeft,
             x1, x2, x3, x4, x5, x6, y1, y2, y3, y4, y5, y6, bx1, by1, bx2, by2) {
    super.__calCache(renderMode, lv, ctx, defs, parent, __cacheStyle, currentStyle, computedStyle,
      clientWidth, clientHeight, offsetWidth, offsetHeight,
      borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth,
      paddingTop, paddingRight, paddingBottom, paddingLeft,
      x1, x2, x3, x4, x5, x6, y1, y2, y3, y4, y5, y6, bx1, by1, bx2, by2);
    if(isNil(__cacheStyle[STROKE_WIDTH])) {
      __cacheStyle[STROKE_WIDTH] = true;
      let strokeWidth = currentStyle[STROKE_WIDTH] || [];
      let w = this.width;
      computedStyle[STROKE_WIDTH] = strokeWidth.map(item => {
        if(item[1] === PX) {
          return item[0];
        }
        else if(item[1] === PERCENT) {
          return item[0] * w * 0.01;
        }
        else {
          return 0;
        }
      });
    }
    if(isNil(__cacheStyle[STROKE_DASHARRAY])) {
      __cacheStyle[STROKE_DASHARRAY] = true;
      computedStyle[STROKE_DASHARRAY] = currentStyle[STROKE_DASHARRAY] || [];
      __cacheStyle[STROKE_DASHARRAY_STR] = computedStyle[STROKE_DASHARRAY].map(item => joinArr(item, ','));
    }
    // 直接赋值的
    [
      STROKE_LINECAP,
      STROKE_LINEJOIN,
      STROKE_MITERLIMIT,
      FILL_RULE,
    ].forEach(k => {
      computedStyle[k] = currentStyle[k];
    });
    // stroke/fll移至render里处理，因为cache涉及渐变坐标偏移
    [STROKE, FILL].forEach(k => {
      if(isNil(__cacheStyle[k])) {
        let v = currentStyle[k];
        computedStyle[k] = v;
        let res = [];
        if(Array.isArray(v)) {
          v.forEach(item => {
            if(item && (item.k === 'linear' || item.k === 'radial' || item.k === 'conic')) {
              res.push(this.__gradient(renderMode, ctx, defs, x3, y3, x4, y4, item));
            }
            else if(item[3] > 0) {
              res.push(int2rgba(item));
            }
            else {
              res.push('none');
            }
          });
        }
        __cacheStyle[k] = res;
      }
    });
  }

  __calContent(renderMode, lv, currentStyle, computedStyle) {
    // Geom强制有内容
    return computedStyle[VISIBILITY] !== 'hidden';
  }

  __preSet() {
    let { sx: x, sy: y, width, height, __cacheStyle, computedStyle } = this;
    let {
      [BORDER_TOP_WIDTH]: borderTopWidth,
      [BORDER_LEFT_WIDTH]: borderLeftWidth,
      [DISPLAY]: display,
      [MARGIN_TOP]: marginTop,
      [MARGIN_LEFT]: marginLeft,
      [PADDING_TOP]: paddingTop,
      [PADDING_LEFT]: paddingLeft,
      [VISIBILITY]: visibility,
    } = computedStyle;
    let originX = x + borderLeftWidth + marginLeft + paddingLeft;
    let originY = y + borderTopWidth + marginTop + paddingTop;
    let cx = originX + width * 0.5;
    let cy = originY + height * 0.5;
    let {
      [FILL]: fill,
      [STROKE]: stroke,
      [STROKE_DASHARRAY_STR]: strokeDasharrayStr,
    } = __cacheStyle;
    let {
      [STROKE_WIDTH]: strokeWidth,
      [STROKE_LINECAP]: strokeLinecap,
      [STROKE_LINEJOIN]: strokeLinejoin,
      [STROKE_MITERLIMIT]: strokeMiterlimit,
      [STROKE_DASHARRAY]: strokeDasharray,
      [FILL_RULE]: fillRule,
    } = computedStyle;
    return {
      x,
      y,
      originX,
      originY,
      width,
      height,
      cx,
      cy,
      display,
      stroke,
      strokeWidth,
      strokeDasharray,
      strokeDasharrayStr,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit,
      fill,
      visibility,
      fillRule,
    };
  }

  __preSetCanvas(renderMode, ctx, res) {
    let {
      stroke,
      strokeWidth,
      strokeDasharray,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit,
      fill,
    } = res;
    if(renderMode === mode.CANVAS) {
      if(fill) {
        if(fill.k === 'linear') {
          ctx.fillStyle = fill.v;
        }
        else if(fill.k === 'radial' && !Array.isArray(fill.v)) {
          ctx.fillStyle = fill.v;
        }
        else if(fill.k === 'conic') {
          //
        }
        else if(!fill.k && ctx.fillStyle !== fill) {
          ctx.fillStyle = fill;
        }
      }
      if(stroke) {
        if(stroke.k === 'linear') {
          ctx.strokeStyle = stroke.v;
        }
        else if(stroke.k === 'radial' && !Array.isArray(stroke.v)) {
          ctx.strokeStyle = stroke.v;
        }
        else if(stroke.k === 'conic') {
          //
        }
        else if(!stroke.k && ctx.strokeStyle !== stroke) {
          ctx.strokeStyle = stroke;
        }
      }
      if(strokeWidth !== undefined && ctx.lineWidth !== strokeWidth) {
        ctx.lineWidth = strokeWidth;
      }
      if(strokeLinecap !== undefined && ctx.lineCap !== strokeLinecap) {
        ctx.lineCap = strokeLinecap;
      }
      if(strokeLinejoin !== undefined && ctx.lineJoin !== strokeLinejoin) {
        ctx.lineJoin = strokeLinejoin;
      }
      if(strokeMiterlimit !== undefined && ctx.miterLimit !== strokeMiterlimit) {
        ctx.miterLimit = strokeMiterlimit;
      }
      // 小程序没这个方法
      if(util.isFunction(ctx.getLineDash)) {
        if(strokeDasharray && !util.equalArr(ctx.getLineDash(), strokeDasharray)) {
          ctx.setLineDash(strokeDasharray);
        }
      }
      else if(strokeDasharray) {
        ctx.setLineDash(strokeDasharray);
      }
    }
  }

  render(renderMode, lv, ctx, defs, cache) {
    // cache状态渲染Root会先计算出super的__renderSelfData，非cache则无，也有可能渲染到一半异常从头再来，此时可能有也可能无
    let res = this.__renderSelfData || super.render(renderMode, lv, ctx, defs, cache);
    let __config = this.__config;
    let {
      [NODE_CACHE]: __cache,
      [NODE_CACHE_FILTER]: __cacheFilter,
      [NODE_CACHE_MASK]: __cacheMask,
      [NODE_CACHE_OVERFLOW]: __cacheOverflow,
    } = __config;
    if(renderMode === mode.CANVAS && cache) {
      __config[NODE_CACHE_TOTAL] = __config[NODE_CACHE];
    }
    // 存在老的缓存认为可提前跳出
    if(lv < level.REPAINT
      && (__cache && __cache.available
        || !level.contain(lv, level.FILTER) && __cacheFilter
        || __cacheMask || __cacheOverflow)) {
      res.break = true; // geom子类标识可以跳过自定义render()
    }
    if(renderMode === mode.SVG) {
      this.virtualDom.type = 'geom';
    }
    // 无论canvas/svg，break可提前跳出省略计算
    if(res.break) {
      return res;
    }
    // data在无cache时没有提前设置
    let preData = this.__preSet();
    return Object.assign(res, preData);
  }

  __renderPolygon(renderMode, ctx, defs, res) {
    let {
      fill: fills,
      fillRule: fillRules,
      stroke: strokes,
      strokeWidth: strokeWidths,
      strokeDasharray: strokeDasharrays,
      strokeDasharrayStr: strokeDasharrayStrs,
      strokeLinecap: strokeLinecaps,
      strokeLinejoin: strokeLinejoins,
      strokeMiterlimit: strokeMiterlimits,
      dx,
      dy,
    } = res;
    let { __cacheProps: { list }, isMulti } = this;
    // 普通情况下只有1个，按普通情况走
    if(fills.length <= 1 && strokes.length <= 1) {
      let o = {
        fill: fills[0],
        fillRule: fillRules[0],
        stroke: strokes[0],
        strokeWidth: strokeWidths[0],
        strokeDasharray: strokeDasharrays[0],
        strokeDasharrayStr: strokeDasharrayStrs[0],
        strokeLinecap: strokeLinecaps[0],
        strokeLinejoin: strokeLinejoins[0],
        strokeMiterlimit: strokeMiterlimits[0],
        dx,
        dy,
      };
      this.__renderOnePolygon(renderMode, ctx, defs, isMulti, list, o);
    }
    // 多个需要fill在下面，stroke在上面，依次循环
    else {
      for(let i = 0, len = fills.length; i < len; i++) {
        let fill = fills[i];
        if(fill) {
          let o = {
            fill,
            fillRule: fillRules[i],
            dx,
            dy,
          };
          this.__renderOnePolygon(renderMode, ctx, defs, isMulti, list, o);
        }
      }
      for(let i = 0, len = strokes.length; i < len; i++) {
        let stroke = strokes[i];
        if(stroke) {
          let o = {
            stroke,
            strokeWidth: strokeWidths[i],
            strokeDasharray: strokeDasharrays[i],
            strokeDasharrayStr: strokeDasharrayStrs[i],
            strokeLinecap: strokeLinecaps[i],
            strokeLinejoin: strokeLinejoins[i],
            strokeMiterlimit: strokeMiterlimits[i],
            dx,
            dy,
          };
          this.__renderOnePolygon(renderMode, ctx, defs, isMulti, list, o);
        }
      }
    }
  }

  __renderOnePolygon(renderMode, ctx, defs, isMulti, list, res) {
    let {
      fill,
      stroke,
      strokeWidth,
    } = res;
    let isFillCE = fill && fill.k === 'conic';
    let isStrokeCE = stroke && stroke.k === 'conic';
    // 椭圆是array
    let isFillRE = fill && fill.k === 'radial' && Array.isArray(fill.v);
    let isStrokeRE = strokeWidth && strokeWidth > 0 && stroke && stroke.k === 'radial' && Array.isArray(stroke.v);
    if(isFillCE || isStrokeCE) {
      if(isFillCE) {
        this.__conicGradient(renderMode, ctx, defs, list, isMulti, res);
      }
      else if(fill !== 'none') {
        this.__drawPolygon(renderMode, ctx, defs, isMulti, list, res, true);
      }
      if(strokeWidth && strokeWidth > 0 && isStrokeCE) {
        inject.warn('Stroke style can not use conic-gradient');
      }
      else if(strokeWidth && strokeWidth > 0 && stroke !== 'none') {
        this.__drawPolygon(renderMode, ctx, defs, isMulti, list, res, false, true);
      }
    }
    else if(isFillRE || isStrokeRE) {
      if(isFillRE) {
        this.__radialEllipse(renderMode, ctx, defs, list, isMulti, res, 'fill');
      }
      else if(fill !== 'none') {
        this.__drawPolygon(renderMode, ctx, defs, isMulti, list, res, true);
      }
      // stroke椭圆渐变matrix会变形，降级为圆
      if(strokeWidth && strokeWidth > 0 && isStrokeRE) {
        inject.warn('Stroke style can not use radial-gradient for ellipse');
        res.stroke.v = res.stroke.v[0];
        this.__drawPolygon(renderMode, ctx, defs, isMulti, list, res, false, true);
      }
      else if(strokeWidth && strokeWidth > 0 && stroke !== 'none') {
        this.__drawPolygon(renderMode, ctx, defs, isMulti, list, res, false, true);
      }
    }
    else {
      this.__drawPolygon(renderMode, ctx, defs, isMulti, list, res, true, true);
    }
  }

  __drawPolygon(renderMode, ctx, defs, isMulti, list, res, isFill, isStroke) {
    let {
      fill,
      stroke,
      strokeWidth,
      fillRule,
      strokeDasharrayStr,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit,
      dx,
      dy,
    } = res;
    if(renderMode === mode.CANVAS) {
      this.__preSetCanvas(renderMode, ctx, res);
      ctx.beginPath();
      if(isMulti) {
        list.forEach(item => canvasPolygon(ctx, item, dx, dy));
      }
      else {
        canvasPolygon(ctx, list, dx, dy);
      }
      if(isFill && fill && fill !== 'none') {
        ctx.fill(fillRule);
      }
      if(isStroke && stroke !== 'none' && strokeWidth && strokeWidth > 0) {
        ctx.stroke();
      }
      ctx.closePath();
    }
    else if(renderMode === mode.SVG) {
      let d = '';
      if(isMulti) {
        list.forEach(item => d += svgPolygon(item));
      }
      else {
        d = svgPolygon(list);
      }
      let props = [
        ['d', d],
      ];
      // 2个都没有常出现在多fill/stroke时，也有可能特殊单个故意这样写的
      if((!fill || fill === 'none') && (!stroke || stroke === 'none')) {
        return;
      }
      if(isFill && fill && fill !== 'none') {
        props.push(['fill', fill.v || fill]);
        if(fillRule && fillRule !== 'nonzero') {
          props.push(['fill-rule', fillRule]);
        }
      }
      else {
        props.push(['fill', 'none']);
      }
      if(isStroke && stroke !== 'none' && strokeWidth && strokeWidth > 0) {
        props.push(['stroke', stroke.v || stroke]);
        props.push(['stroke-width', strokeWidth]);
        this.__propsStrokeStyle(props, strokeDasharrayStr, strokeLinecap, strokeLinejoin, strokeMiterlimit);
      }
      else {
        props.push(['stroke-width', 0]);
      }
      this.addGeom('path', props);
    }
  }

  __inversePtList(list, isMulti, t) {
    if(isMulti) {
      return list.map(item => {
        if(!item || !item.length) {
          return null;
        }
        return item.map(item => {
          if(!item || !item.length) {
            return null;
          }
          let arr = [];
          for(let i = 0, len = item.length; i < len; i += 2) {
            let p = mx.calPoint([item[i], item[i + 1]], t);
            arr.push(p[0]);
            arr.push(p[1]);
          }
          return arr;
        });
      });
    }
    else {
      return list.map(item => {
        if(!item || !item.length) {
          return null;
        }
        let arr = [];
        for(let i = 0, len = item.length; i < len; i += 2) {
          let p = mx.calPoint([item[i], item[i + 1]], t);
          arr.push(p[0]);
          arr.push(p[1]);
        }
        return arr;
      });
    }
  }

  __radialEllipse(renderMode, ctx, defs, list, isMulti, res, method) {
    let {
      strokeWidth,
      strokeDasharrayStr,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit,
      dx,
      dy,
    } = res;
    let [color, matrix, cx, cy] = res[method].v;
    // 椭圆渐变的转换，顶点逆矩阵变换
    let tfo = [cx, cy];
    matrix = transform.calMatrixByOrigin(matrix, tfo);
    let t = mx.inverse(matrix);
    list = this.__inversePtList(list, isMulti, t);
    // 用正向matrix渲染
    if(renderMode === mode.CANVAS) {
      if(matrix) {
        ctx.save();
        let me = this.matrixEvent;
        matrix = mx.multiply(me, matrix);
        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
      }
      ctx.beginPath();
      if(ctx[method + 'Style'] !== color) {
        ctx[method + 'Style'] = color;
      }
      if(isMulti) {
        list.forEach(item => painter.canvasPolygon(ctx, item, dx, dy));
      }
      else {
        canvasPolygon(ctx, list, dx, dy);
      }
      ctx[method]();
      ctx.closePath();
      if(matrix) {
        ctx.restore();
      }
    }
    else if(renderMode === mode.SVG) {
      let d = '';
      if(isMulti) {
        list.forEach(item => d += svgPolygon(item));
      }
      else {
        d = svgPolygon(list);
      }
      let props = [
        ['d', d],
      ];
      if(method === 'fill') {
        props.push(['fill', color]);
        props.push(['strokeWidth', 0]);
      }
      else if(method === 'stroke') {
        props.push(['fill', 'none']);
        props.push(['stroke', color]);
        props.push(['stroke-width', strokeWidth]);
        this.__propsStrokeStyle(props, strokeDasharrayStr, strokeLinecap, strokeLinejoin, strokeMiterlimit);
      }
      props.push(['transform', `matrix(${joinArr(matrix, ',')})`]);
      this.addGeom('path', props);
    }
  }

  __conicGradient(renderMode, ctx, defs, list, isMulti, res) {
    let {
      fill,
      dx,
      dy,
    } = res;
    let color = fill.v;
    if(renderMode === mode.CANVAS) {
      let alpha = ctx.globalAlpha;
      ctx.globalAlpha = alpha * 0.5; // 割圆法的叠加会加深色彩，这里还原模拟下透明度
      if(isMulti) {
        list.forEach(item => {
          ctx.save();
          ctx.beginPath();
          canvasPolygon(ctx, item, dx, dy);
          ctx.clip();
          ctx.closePath();
          color.forEach(item => {
            ctx.beginPath();
            canvasPolygon(ctx, item[0], dx, dy);
            ctx.fillStyle = item[1];
            ctx.fill();
            ctx.closePath();
          });
          ctx.restore();
        });
      }
      else {
        ctx.save();
        ctx.beginPath();
        canvasPolygon(ctx, list, dx, dy);
        ctx.clip();
        ctx.closePath();
        color.forEach(item => {
          ctx.beginPath();
          canvasPolygon(ctx, item[0], dx, dy);
          ctx.fillStyle = item[1];
          ctx.fill();
          ctx.closePath();
        });
        ctx.restore();
      }
      ctx.globalAlpha = alpha;
    }
    else if(renderMode === mode.SVG) {
      if(isMulti) {
        list.forEach(item => {
          let v = {
            tagName: 'clipPath',
            children: [{
              tagName: 'path',
              props: [
                ['d', svgPolygon(item)],
                ['fill', '#FFF'],
              ],
            }],
          };
          let clip = defs.add(v);
          this.__config[NODE_DEFS_CACHE].push(v);
          color.forEach(item => {
            this.virtualDom.bb.push({
              type: 'item',
              tagName: 'path',
              props: [
                ['d', svgPolygon(item[0])],
                ['fill', item[1]],
                ['clip-path', 'url(#' + clip + ')'],
              ],
            });
          });
        });
      }
      else {
        let v = {
          tagName: 'clipPath',
          children: [{
            tagName: 'path',
            props: [
              ['d', svgPolygon(list)],
              ['fill', '#FFF'],
            ],
          }],
        };
        let clip = defs.add(v);
        this.__config[NODE_DEFS_CACHE].push(v);
        color.forEach(item => {
          this.virtualDom.bb.push({
            type: 'item',
            tagName: 'path',
            props: [
              ['d', svgPolygon(item[0])],
              ['fill', item[1]],
              ['clip-path', 'url(#' + clip + ')'],
            ],
          });
        });
      }
    }
  }

  __propsStrokeStyle(props, strokeDasharrayStr, strokeLinecap, strokeLinejoin, strokeMiterlimit) {
    if(strokeDasharrayStr) {
      props.push(['stroke-dasharray', strokeDasharrayStr]);
    }
    if(strokeLinecap && strokeLinecap !== 'butt') {
      props.push(['stroke-linecap', strokeLinecap]);
    }
    if(strokeLinejoin && strokeLinejoin !== 'miter') {
      props.push(['stroke-linejoin', strokeLinejoin]);
    }
    if(strokeMiterlimit && strokeMiterlimit !== 4) {
      props.push(['stroke-miterlimit', strokeMiterlimit]);
    }
  }

  // geom的cache无内容也不清除
  __releaseWhenEmpty() {}

  addGeom(tagName, props) {
    props = util.hash2arr(props);
    this.virtualDom.children.push({
      type: 'item',
      tagName,
      props,
    });
  }

  getProps(k) {
    let v = this.currentProps[k];
    if(!isNil(v)) {
      return v;
    }
    return this['__' + k];
  }

  get baseLine() {
    return this.__height;
  }

  get isMulti() {
    return this.__isMulti;
  }

  get isMask() {
    return this.__isMask;
  }

  get isClip() {
    return this.__isClip;
  }

  get currentProps() {
    return this.__currentProps;
  }

  static get REGISTER() {
    return REGISTER;
  }

  static getRegister(name) {
    if(!name || !util.isString(name) || name.charAt(0) !== '$') {
      throw new Error('Invalid param');
    }
    if(!REGISTER.hasOwnProperty(name)) {
      throw new Error(`Geom has not register: ${name}`);
    }
    return REGISTER[name];
  }

  static register(name, obj) {
    if(!name || !util.isString(name) || name.charAt(0) !== '$'
      || !obj.prototype || !(obj.prototype instanceof Geom)) {
      throw new Error('Invalid param');
    }
    if(Geom.hasRegister(name)) {
      throw new Error(`Geom has already register: ${name}`);
    }
    REGISTER[name] = obj;
  }

  static hasRegister(name) {
    return name && REGISTER.hasOwnProperty(name);
  }
}

export default Geom;