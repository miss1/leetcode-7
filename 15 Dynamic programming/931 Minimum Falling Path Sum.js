/**
 * @param {number[][]} matrix
 * @return {number}
 * 要求和最小的falling path。从第二行开始，对于每一个element，求出到达当前element时，累积的最小值，记录下来
 * 最后返回最后一行中的最小值即可
 * time: O(n²)
 * space: O(1)
 */
var minFallingPathSum = function(matrix) {
  let n = matrix.length;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let left = j - 1 < 0 ? Infinity : matrix[i - 1][j - 1];
      let right = j + 1 >= n ? Infinity : matrix[i - 1][j + 1];
      matrix[i][j] += Math.min(left, matrix[i - 1][j], right);
    }
  }
  return Math.min(...matrix[n - 1]);
};