import enums from '../util/enums';
import TextBox from './TextBox';

const { STYLE_KEY: {
  DISPLAY,
  MARGIN_LEFT,
  BORDER_LEFT_WIDTH,
  PADDING_LEFT,
  PADDING_RIGHT,
  BORDER_RIGHT_WIDTH,
  MARGIN_RIGHT,
} } = enums;

/**
 * css中常见的概念，一行内容，里面可能有若干不同的内容，仅在布局阶段出现，不参与渲染逻辑
 * 本类是个抽象逻辑概念，会包含Text的内容TextBox和inline等节点，而内容TextBox则属于Text
 * 一个Text可能因为换行产生多个TextBox，从而形成不同行的内容就属于不同的LineBox
 * 本类属于block（包含flex和inlineBlock，下同）节点下，一个dom会有个专门列表，
 * 包含若干个LineBox保存着若干行文本内容TextBox，不直接关联Text，
 * inline则不会有此对象和列表，其复用最近block父层的，这样解决嵌套问题，
 * block在布局时将列表向孩子传递下去，每遇到block会重新生成
 * 每当发生换行时，专门列表中会新生成一个LineBox，让后续内容继续跟随新的LB
 * LB内部要进行垂直对齐，Text内容较简单x字符底部为baseLine，inline等节点按最后一行baseLine
 */
class LineBox {
  constructor(x, y) {
    this.__list = [];
    this.__x = x;
    this.__y = y;
    this.__lineHeight = 0; // 可能出现空的inline，因此一个inline进入布局时先设置当前lineBox的最小lineHeight/baseLine
    this.__baseLine = 0;
  }

  add(item) {
    this.list.push(item);
    item.__parentLineBox = this;
  }

  verticalAlign() {
    let n = this.baseLine;
    // 只有1个也需要对齐，因为可能内嵌了空inline使得baseLine发生变化
    if(this.list.length) {
      this.list.forEach(item => {
        let m = item.baseLine;
        if(m !== n) {
          item.__offsetY(n - m);
        }
      });
    }
  }

  __offsetX(diff) {
    this.__x += diff;
  }

  __offsetY(diff) {
    this.__y += diff;
  }

  /**
   * 防止空inline，每当遇到inline就设置当前lineBox的lineHeight/baseLine，这样有最小值兜底
   * @param l
   * @param b
   * @private
   */
  __setLB(l, b) {
    this.__lineHeight = l;
    this.__baseLine = b;
  }

  get list() {
    return this.__list;
  }

  get size() {
    return this.__list.length;
  }

  get x() {
    return this.__x;
  }

  get y() {
    return this.__y;
  }

  get endY() {
    return this.y + this.height;
  }

  get width() {
    let list = this.list;
    let length = list.length;
    if(length) {
      let first = list[0];
      let last = list[length - 1];
      let x1 = first.x;
      let dom = first instanceof TextBox ? first.parent.domParent : first.domParent;
      // 因为inline可以嵌套inline，所以一直向上查找到非inline为止，每层inline如果是首个则减去左侧mbp
      while(true) {
        let list = dom.contentBoxList;
        let {
          [DISPLAY]: display,
          [MARGIN_LEFT]: marginLeft,
          [BORDER_LEFT_WIDTH]: borderLeftWidth,
          [PADDING_LEFT]: paddingLeft,
        } = dom.computedStyle;
        if(display !== 'inline') {
          break;
        }
        if(first === list[0]) {
          x1 -= marginLeft + borderLeftWidth + paddingLeft;
        }
        dom = dom.domParent;
      }
      let x2 = last.x + last.outerWidth;
      dom = last instanceof TextBox ? last.parent.domParent : last.domParent;
      // 同向上查非inline，每层inline如果是最后一个则加上右侧mbp
      while(true) {
        let list = dom.contentBoxList;
        let {
          [DISPLAY]: display,
          [MARGIN_RIGHT]: marginRight,
          [BORDER_RIGHT_WIDTH]: borderRightWidth,
          [PADDING_RIGHT]: paddingRight,
        } = dom.computedStyle;
        if(display !== 'inline') {
          break;
        }
        if(first === list[list.length - 1]) {
          x2 += marginRight + borderRightWidth + paddingRight;
        }
        dom = dom.domParent;
      }
      return x2 - x1;
    }
    return 0;
  }

  get height() {
    let height = 0;
    this.list.forEach(item => {
      height = Math.max(height, item.outerHeight);
    });
    return Math.max(this.__lineHeight, height);
  }

  get baseLine() {
    let baseLine = 0;
    this.list.forEach(item => {
      baseLine = Math.max(baseLine, item.baseLine);
    });
    return Math.max(this.__baseLine, baseLine);
  }

  get lineHeight() {
    let lineHeight = 0;
    // 只有TextBox和InlineBlock
    this.list.forEach(item => {
      lineHeight = Math.max(lineHeight, item.outerHeight);
    });
    return Math.max(this.__lineHeight, lineHeight);
  }
}

export default LineBox;
