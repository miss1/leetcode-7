/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 * 题目可以解释为，给定一个矩阵，每一行每一列都是递增的，找到所有的点(x,y)，满足customfunction.f(x, y) === z
 * 既然每一行每一列都是递增的，那可以x从头开始，y从尾开始枚举，计算z。若结果大于z，说明要减少值，y-1；若小于z，说明要增加值，x+1
 * time: O(x + y)
 * space: (x)
 */
var findSolution = function(customfunction, z) {
  let res = [];
  let x = 1, y = 1000;
  while (x <= 1000 && y > 0) {
    let v = customfunction.f(x, y);
    if (v > z) y--;
    else if (v < z) x++;
    else {
      res.push([x, y]);
      x++;
      y--;
    }
  }
  return res;
};