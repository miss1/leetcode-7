/**
 * @param {number[][]} matrix
 * @return {number}
 * 二维矩阵的DFS，求出每一个点的四个方向的值，并将已经求过的值记录下来避免重复计算
 * time: O(mn)
 * space: O(mn)
 */
var longestIncreasingPath = function(matrix) {
  let m = matrix.length, n = matrix[0].length;
  let resMatrix = new Array(m).fill(0).map(val => new Array(n).fill(0));
  const getLongestPath = function(i, j, pre) {
    if (i < 0 || i >= m || j < 0 || j >= n || matrix[i][j] <= pre) return 0;
    if (resMatrix[i][j] !== 0) return resMatrix[i][j];
    resMatrix[i][j] = Math.max(resMatrix[i][j], getLongestPath(i, j - 1, matrix[i][j]));
    resMatrix[i][j] = Math.max(resMatrix[i][j], getLongestPath(i, j + 1, matrix[i][j]));
    resMatrix[i][j] = Math.max(resMatrix[i][j], getLongestPath(i - 1, j, matrix[i][j]));
    resMatrix[i][j] = Math.max(resMatrix[i][j], getLongestPath(i + 1, j, matrix[i][j]));
    return ++resMatrix[i][j];
  };
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, getLongestPath(i, j, -Infinity));
    }
  }
  return res;
};