/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 * DP, bottom-up
 * dp[i][j] 存储 使用i天，jobDifficulty以j为起点时的minimum difficulty
 * base: len(jobDifficulty) = n; i = 1时，dp[i][j] 的值为 j到n这一段中的最大值
 * 对于每一个dp[i][j]
 * 遍历z从j到n，将j到z划分为两段：j~z-1, z~n
 * > j~z-1放到同一天处理，difficulty = max(j~z-1)
 * > 余下的z~n需要 i - 1天，dp[i - 1][z]
 * 则dp[i][j] = max(j~z-1) + dp[i - 1][z]
 * time: O(n*n*d)
 * space: O(n*d)
 */
var minDifficulty = function(jobDifficulty, d) {
  const n = jobDifficulty.length;
  let dp = new Array(d + 1).fill(0).map(val => new Array(n + 1).fill(Infinity));
  for (let i = 1; i <= d; i++) {
    for (let j = n - 1; j >= 0; j--) {
      // jobs < days，不能让每一天都有job，返回-1
      if (n + 1 - j < i) continue;
      // base, 只有一天时，dp[i][j]取所有job的最大值
      if (i === 1) {
        if (j === n - 1) dp[i][j] = jobDifficulty[j];
        else dp[i][j] = Math.max(dp[i][j + 1], jobDifficulty[j]);
        continue;
      }
      // 切分
      let cmax = jobDifficulty[j];
      for (let z = j + 1; z < n; z++) {
        cmax = Math.max(cmax, jobDifficulty[z - 1]);  // j ~ z-1，前半段中的最大值
        if (dp[i - 1][z] === Infinity) continue;  // jobs < days，跳过
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][z] + cmax);  // max(j~z-1) + dp[i - 1][z]
      }
    }
  }
  return dp[d][0] === Infinity ? -1 : dp[d][0];
};