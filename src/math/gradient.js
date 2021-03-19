/**
 * @typedef {Object} gradientStatement
 * @property {Array<number>} color - 颜色rgba，0～255，如 [0, 255, 0, 255]
 * @property {number} angle - 角度，0～2 * Math.PI，(originX, originY) 为原点，垂直向上为0
 */

/**
 *
 * @param {number} originX - 渐变中心x坐标
 * @param {number} originY - 渐变中心y坐标
 * @param {number} width - 图片宽度
 * @param {number} height - 图片高度
 * @param {Array<gradientStatement>} gradientStatementList - 渐变声明列表
 * @returns {Array<number>} 图像像素数组，每4个元素（rgba）构成一个像素点
 * @example const w = 200;
      const h = 200;
      const ctx = document.getElementById('example').getContext('2d');
      const imgdata = ctx.getImageData(0,0, w, h);
      const data = getConicGradientImage(99.5, 99.5, w, h, [{
        color: [0,0,0,255],
        angle: 0,
      }
      ,{
        color: [255,0,0,255],
        angle: 2 * Math.PI,
      }]);
      for (let i = 0; i < imgdata.data.length; i++) {
        imgdata.data[i] = data[i];
      }
      ctx.putImageData(imgdata, 0, 0);
 */
export function getConicGradientImage(
  originX,
  originY,
  width,
  height,
  gradientStatementList
) {
  if (gradientStatementList.length < 2) {
    throw new SyntaxError(
      "Conic gradient should recieve at least 2 gradient statements (start line and end line)."
    );
  }

  /**
   * 根据坐标获取角度
   * @param {number} x - x坐标，左上角为原点
   * @param {number} y - y坐标，左上角为原点
   * @returns {number} angle - 角度，0～2 * Math.PI，(originX, originY) 为原点，垂直向上为0
   */
  const getAngle = (x, y) => {
    // 此函数注释内的x、y轴基于 (originX, originY)
    // 计算相对 (originX, originY) 的坐标(dx, dy)
    const dx = x - originX;
    const dy = originY - y;
    // 在y轴上
    if (dx === 0) {
      return dy < 0
        ? // y轴负半轴，
          1 * Math.PI
        : // y轴正半轴，因此，(originX, originY) 的angle视作0
          0;
    }
    // 在x轴上
    if (dy === 0) {
      return dx < 0
        ? // x轴负半轴
          1.5 * Math.PI
        : // x轴正半轴
          0.5 * Math.PI;
    }
    const atan = Math.atan(dy / dx);
    /**
     *  2   |  1
     * -----|-----
     *  3   |  4
     */
    // 第一象限，atan > 0
    // 第四象限，atan < 0
    if (dx > 0) {
      return 0.5 * Math.PI - atan;
    }
    // 第二象限，atan < 0
    // 第三象限，atan > 0
    if (dx < 0) {
      return 1.5 * Math.PI - atan;
    }
  };

  const increasingList = gradientStatementList;
  const res = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // step 1. 找到当前点坐标相对 (originX, originY) 的角度
      const angle = getAngle(x, y);
      // step 2. 找到当前点坐标对应的渐变区间
      let j;
      for (
        j = 0;
        j < increasingList.length && increasingList[j].angle <= angle;
        j++
      ) {}
      const start = increasingList[j - 1];
      const end = increasingList[j];
      if (!(start && end)) {
        // step 2-1. 不在渐变区间里，用透明色填充
        res.push(0, 0, 0, 0);
        continue;
      }
      // step 3. 计算色值并填充
      const factor = (angle - start.angle) / (end.angle - start.angle);
      const color = end.color.map(
        (v, idx) => factor * (v - start.color[idx]) + start.color[idx]
      );
      res.push(...color);
    }
  }
  return res;
}