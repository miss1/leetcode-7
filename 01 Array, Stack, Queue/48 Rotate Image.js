/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 二位矩阵顺时针旋转90度
 * time: O(n²)
 * space: O(1)
 */
var rotate = function(matrix) {
  let start = 0, end = matrix.length - 1;
  while (start < end) {
    for (let i = start; i < end; i++) {
      let right = matrix[i][end];
      matrix[i][end] = matrix[start][i];
      let down = matrix[end][end - (i - start)];
      matrix[end][end - (i - start)] = right;
      let left = matrix[end - (i - start)][start];
      matrix[end - (i - start)][start] = down;
      matrix[start][i] = left;
    }
    start++;
    end--;
  }
};