/**
 * @param {string} s
 * @return {number}
 * dp, top-down
 * dp[i]记录当以s[i]结尾时，有多少种decode方式
 * 有两种情况，s[i]为单独一个字母，则dp[i] = dp[i - 1]; s[i-1]s[i]结合组成一个字母，则dp[i] = dp[i - 2]
 * 满足组合条件的情况下（数字不等于0并且不以0开头）可得：dp[i] = dp[i - 1] + dp[i - 2]
 * time: O(n)
 * space: O(n)
 */
var numDecodings = function(s) {
  if (s[0] === '0') return 0;
  const n = s.length;
  let dp = new Array(n + 1).fill(1);
  for (let i = 1; i < n; i++) {
    dp[i + 1] = 0;
    if (s[i] !== '0') dp[i + 1] += dp[i];
    if (s[i - 1] !== '0' && Number(s[i - 1]) * 10 + Number(s[i]) <= 26) dp[i + 1] += dp[i - 1];
  }
  return dp[n];
};
