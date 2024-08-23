/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 * 求两个长方形组成的区域面积
 * 先求两个长方形的面积，相加，然后减去重叠的部分
 * time: O(1)
 * space: O(1)
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  let p1 = (ax2 - ax1) * (ay2 - ay1);
  let p2 = (bx2 - bx1) * (by2 - by1);
  // 不重叠
  if (bx1 >= ax2 || bx2 <= ax1 || by2 <= ay1 || by1 >= ay2 || p1 === 0 || p2 === 0) return p1 + p2;
  // 重叠部分的长宽
  let x = Math.min(bx2, ax2) - Math.max(ax1, bx1);
  let y = Math.min(by2, ay2) - Math.max(ay1, by1);
  return p1 + p2 - (x * y);
};