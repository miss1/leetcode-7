/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 从矩阵左下角开始搜索，根据题意，最左下角的点(x,y)，同一y轴上的点都在它上面，都比它小；同一x轴上的点都在它右边，都比它大。
 * (x,y)处的点跟target相比，若相等，则返回true，若大于target，则x-1向上走一步（值减小）；如果小于target，则y+1向右走一步（值增大）
 * time: O(m+n)
 * space: O(1)
 */
var searchMatrix = function(matrix, target) {
  let x = matrix.length - 1;
  let y = 0;
  while (x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] === target) return true;
    if (matrix[x][y] > target) x = x - 1;
    else y = y + 1;
  }
  return false;
};