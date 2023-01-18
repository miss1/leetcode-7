/**
 * @param {character[][]} matrix
 * @return {number}
 * 这题跟85题类似，但是这题是正方形，会更简单
 * 用数组dp记录，以当前点为终点时组成的正方形的最长的边。
 * dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
 * time: O(mn)
 * space: O(mn)
 */
var maximalSquare = function(matrix) {
  let maxLength = 0, n = matrix.length, m = matrix[0].length;
  let dp = new Array(n + 1).fill(0).map(val => new Array(m + 1).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === '1') {
        dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1;
        maxLength = Math.max(maxLength, dp[i + 1][j + 1]);
      }
    }
  }
  return maxLength * maxLength;
};