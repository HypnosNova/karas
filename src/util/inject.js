import util from './util';
import enums from './enums';
import textCache from '../node/textCache';

const { STYLE_KEY: {
  FONT_SIZE,
  FONT_FAMILY,
  FONT_WEIGHT,
} } = enums;
const SPF = 1000 / 60;

const CANVAS = {};
const WEBGL = {};
const CANVAS_LIST = [];
const WEBGL_LIST = [];

function cache(key, width, height, hash, message) {
  let o;
  if(!key) {
    let target = hash === CANVAS ? CANVAS_LIST : WEBGL_LIST;
    if(target.length) {
      o = target.pop();
    }
    else {
      o = document.createElement('canvas');
    }
  }
  else if(!hash[key]) {
    o = hash[key] = document.createElement('canvas');
  }
  else {
    o = hash[key];
  }
  // o.setAttribute('width', width + 'px');
  // o.setAttribute('height', height + 'px');
  o.width = width;
  o.height = height;
  if(typeof karas !== 'undefined' && karas.debug) {
    o.style.width = width + 'px';
    o.style.height = height + 'px';
    o.setAttribute('type', hash === CANVAS ? 'canvas' : 'webgl');
    if(key) {
      o.setAttribute('key', key);
    }
    if(message) {
      o.setAttribute('message', message);
    }
    document.body.appendChild(o);
  }
  return {
    canvas: o,
    ctx: hash === CANVAS ? o.getContext('2d')
      : (o.getContext('webgl') || o.getContext('experimental-webgl')),
    draw() {
      // 空函数，仅对小程序提供hook特殊处理，flush缓冲
    },
    available: true,
    release() {
      if(hash === CANVAS) {
        CANVAS_LIST.push(this.canvas);
      }
      else {
        WEBGL_LIST.push(this.canvas);
      }
      this.canvas = null;
      this.ctx = null;
    },
  };
}

function cacheCanvas(key, width, height, message) {
  return cache(key, width, height, CANVAS, message);
}

function cacheWebgl(key, width, height, message) {
  return cache(key, width, height, WEBGL, message);
}

const IMG = {};
const INIT = 0;
const LOADING = 1;
const LOADED = 2;

let inject = {
  measureText() {
    let { list, data } = textCache;
    let html = '';
    let keys = [];
    let chars = [];
    Object.keys(data).forEach(i => {
      let { key, style, s } = data[i];
      if(s) {
        let inline = `position:absolute;font-family:${style[FONT_FAMILY]};font-size:${style[FONT_SIZE]}px;font-weight:${style[FONT_WEIGHT]}`;
        for(let j = 0, len = s.length; j < len; j++) {
          keys.push(key);
          let char = s.charAt(j);
          chars.push(char);
          html += `<span style="${inline}">${char.replace(/</, '&lt;').replace(' ', '&nbsp;')}</span>`;
        }
      }
    });
    if(!html) {
      return;
    }
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = '99999px';
    div.style.top = '-99999px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    div.innerHTML = html;
    let cns = div.childNodes;
    let { charWidth } = textCache;
    for(let i = 0, len = cns.length; i < len; i++) {
      let node = cns[i];
      let key = keys[i];
      let char = chars[i];
      // clientWidth只返回ceil整数，精度必须用getComputedStyle
      let css = window.getComputedStyle(node, null);
      charWidth[key][char] = parseFloat(css.width);
    }
    list.forEach(text => text.__measureCb());
    textCache.list = [];
    textCache.data = {};
    document.body.removeChild(div);
  },
  IMG,
  INIT,
  LOADED,
  LOADING,
  measureImg(url, cb) {
    if(Array.isArray(url)) {
      let count = 0;
      let len = url.length;
      let list = [];
      url.forEach((item, i) => {
        inject.measureImg(item, function(cache) {
          list[i] = cache;
          if(++count === len) {
            cb(list);
          }
        });
      });
      return;
    }
    else if(!url || !util.isString(url)) {
      inject.error('Measure img invalid: ' + url);
      cb && cb({
        state: LOADED,
        success: false,
        url,
      });
      return;
    }
    let cache = IMG[url] = IMG[url] || {
      state: INIT,
      task: [],
    };
    if(cache.state === LOADED) {
      cb && cb(cache);
    }
    else if(cache.state === LOADING) {
      cb && cache.task.push(cb);
    }
    else {
      cache.state = LOADING;
      cb && cache.task.push(cb);
      let img = new Image();
      img.onload = function() {
        cache.state = LOADED;
        cache.success = true;
        cache.width = img.width;
        cache.height = img.height;
        cache.source = img;
        cache.url = url;
        let list = cache.task.splice(0);
        list.forEach(cb => cb(cache));
      };
      img.onerror = function(e) {
        inject.error('Measure img failed: ' + url);
        cache.state = LOADED;
        cache.success = false;
        cache.url = url;
        let list = cache.task.splice(0);
        list.forEach(cb => cb(cache));
      };
      if(url.substr(0, 5) !== 'data:') {
        let host = /^(?:\w+:)?\/\/([^/:]+)/.exec(url);
        if(host) {
          if(location.hostname !== host[1]) {
            img.crossOrigin = 'anonymous';
          }
        }
      }
      img.src = url;
      if(typeof karas !== 'undefined' && karas.debug) {
        document.body.appendChild(img);
      }
    }
  },
  warn(s) {
    console.warn(s);
  },
  error(s) {
    console.error(s);
  },
  requestAnimationFrame(cb) {
    if(!cb) {
      return;
    }
    let res;
    if(typeof requestAnimationFrame !== 'undefined') {
      inject.requestAnimationFrame = requestAnimationFrame.bind(window);
      res = requestAnimationFrame(cb);
    }
    else {
      res = setTimeout(cb, SPF);
      inject.requestAnimationFrame = function(cb) {
        return setTimeout(cb, SPF);
      };
    }
    return res;
  },
  cancelAnimationFrame(id) {
    let res;
    if(typeof cancelAnimationFrame !== 'undefined') {
      inject.cancelAnimationFrame = cancelAnimationFrame.bind(window);
      res = cancelAnimationFrame(id);
    }
    else {
      res = clearTimeout(id);
      inject.cancelAnimationFrame = function(id) {
        return clearTimeout(id);
      };
    }
    return res;
  },
  now() {
    if(typeof performance !== 'undefined') {
      inject.now = function() {
        return Math.floor(performance.now());
      };
      return Math.floor(performance.now());
    }
    inject.now = Date.now.bind(Date);
    return Date.now();
  },
  hasCacheCanvas(key) {
    return key && CANVAS.hasOwnProperty(key);
  },
  getCacheCanvas(width, height, key, message) {
    return cacheCanvas(key, width, height, message);
  },
  releaseCacheCanvas(o) {
    CANVAS_LIST.push(o);
  },
  delCacheCanvas(key) {
    key && delete CANVAS[key];
  },
  hasCacheWebgl(key) {
    return key && WEBGL.hasOwnProperty(key);
  },
  getCacheWebgl(width, height, key, message) {
    return cacheWebgl(key, width, height, message);
  },
  releaseCacheWebgl(o) {
    WEBGL_LIST.push(o);
  },
  delCacheWebgl(key) {
    key && delete WEBGL[key];
  },
  isDom(o) {
    if(o) {
      if(util.isString(o)) {
        return true;
      }
      if(typeof window !== 'undefined' && window.Element && (o instanceof window.Element)) {
        return true;
      }
      if(util.isFunction(o.getElementsByTagName)) {
        return true;
      }
    }
    return false;
  },
};

export default inject;
