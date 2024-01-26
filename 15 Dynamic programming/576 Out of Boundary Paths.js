/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 * DP, 三维
 * dp存储以(i, j)为起点时，走z步，能穿过边界的路径数量
 * 对于每个(i, j),有四个方向可以到达
 * 所以 dp[i, j, z] = dp[i - 1, j, z - 1] + dp[i + 1, j, z - 1] + dp[i, j - 1, z - 1] + dp[i, j + 1, z - 1]
 * base: 如果某一个方向已经在边界，则数量+1
 * 最后返回 dp[startRow, startColumn, maxMove]即可
 * time: O(maxMove * m * n)
 * space: O(m * n)
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
  const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const mod = Math.pow(10, 9) + 7;

  let dp= new Array(m).fill(0).map(val => new Array(n).fill(0));

  for (let z = 1; z <= maxMove; z++) {
    let tmp = new Array(m).fill(0).map(val => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let d of direction) {
          let x = i + d[0], y = j + d[1];
          if (x < 0 || x >= m || y < 0 || y >= n) {
            tmp[i][j] = (tmp[i][j] + 1) % mod;
          } else {
            tmp[i][j] = (tmp[i][j] + dp[x][y]) % mod;
          }
        }
      }
    }
    dp = tmp;
  }

  return dp[startRow][startColumn];
};