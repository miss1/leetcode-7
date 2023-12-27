/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 * dp, dp[z][i][j] 记录使用前z个str时，拥有i个0和j个1，最大子集的数量
 * 对与每一个str，dp[z][i][j]，分两种情况
 * > 不取当前str，值等于前一个数 dp[z - 1][i][j]
 * > 取当前str，当前str有x个0，y个1，则dp[z][i][j] = dp[z - 1][i - x][j - y] + 1
 * time: O(z * m * n)
 * space: O(z * m * n)
 */
var findMaxForm = function(strs, m, n) {
  const t = strs.length;
  let dp = new Array(t + 1).fill(0).map(val => new Array(m + 1).fill(0).map(v => new Array(n + 1).fill(0)));

  const count = (str) => {
    let x = 0, y = 0;
    for (let c of str) {
      if (c === '0') x++;
      if (c === '1') y++;
    }
    return [x, y];
  };

  for (let z = 0; z < t; z++) {
    const [x, y] = count(strs[z]);
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        dp[z + 1][i][j] = dp[z][i][j];
        if (i >= x && j >= y) {
          dp[z + 1][i][j] = Math.max(dp[z + 1][i][j], dp[z][i - x][j - y] + 1);
        }
      }
    }
  }

  return dp[t][m][n];
};
