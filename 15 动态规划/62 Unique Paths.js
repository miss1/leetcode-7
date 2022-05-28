/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 定义二维数组res, res[i][j]存储到位置(i,j)的路径数量。每次只能向下或者向右走
 * 所以 res[i][j] = res[i - 1][j] + res[i][j - 1]
 * time: O(m * n)
 * space: O(m * n)
 */
var uniquePaths = function(m, n) {
  let res = new Array(m + 1).fill(0).map(val => new Array(n + 1).fill(0));
  for (let i = 1; i<= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 && j === 1) res[i][j] = 1;
      else res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
  }
  return res[m][n];
};
