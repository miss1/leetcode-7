/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 * DP，dp记录当有n个筛子，target为t时有多少种组合
 * 对与dp[n][t]可知，第n个筛子的值x有k种情况
 * x = 1 -> 前n-1个筛子的和应该为t - 1 -> dp[n][t] = dp[n - 1][t - 1]
 * x = 2 -> 前n-1个筛子的和应该为t - 2 -> dp[n - 1][t - 2]
 * ...
 * x = k -> 前n-1个筛子的和应该为t - k -> dp[n - 1][t - k]
 * 可得：dp[n][t] = dp[n - 1][t - 1] + dp[n - 1][t - 2] + ... + dp[n - 1][t - k]
 * base: 当n = 1时，dp[1][1] = 1, dp[1][2] = 1, ... dp[1][k] = 1
 * time: O(n*k*t)
 * space: O(n*t)
 */
var numRollsToTarget = function(n, k, target) {
  const mod = Math.pow(10, 9) + 7;
  let dp = new Array(n + 1).fill(0).map(val => new Array(target + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (i === 1 && j <= k) dp[i][j] = 1;
      for (let x = 1; x <= k; x++) {
        if (j >= x) {
          dp[i][j] += dp[i - 1][j - x];
          dp[i][j] = dp[i][j] % mod;
        }
      }
    }
  }
  return dp[n][target];
};