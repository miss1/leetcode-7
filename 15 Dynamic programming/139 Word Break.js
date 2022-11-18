/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 动态规划，假设在s前面插入一个字符一定为true，dp存储第i个字符结尾时的字符串是否为true
 * 遍历s，当前为i时，从0开始到i遍历j。当dp[j]为true时，如果j到i(不包括i)这一段字符串存在于wordDict中，则dp[i]为true
 * time: O(n*n*n)
 * space: O(n)
 */
var wordBreak = function(s, wordDict) {
  let words = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && words.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
