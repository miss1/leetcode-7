/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 * dp[i]存储从s[i]到s[n-1]这一段子串中，需要移除的最小数量的字符
 * 从i到n-1，遍历子串，则有两种情况
 * 1：s[i,j]存在于dic中，则dp[i] = Math.min(dp[i], dp[j + 1])
 * 2: s[i,j]不存在于dic中，则dp[i] = Math.min(dp[i], dp[j + 1] + t.length)
 * time: O(n*n)
 * space: O(n)
 */
var minExtraChar = function(s, dictionary) {
  const n = s.length, dic = new Set(dictionary);
  const dp = new Array(n + 1).fill(Infinity);
  dp[n] = 0;

  for (let i = n - 1; i >= 0; i--) {
    let t = '';
    for (let j = i; j < n; j++) {
      t += s[j];
      if (dic.has(t)) {
        dp[i] = Math.min(dp[i], dp[j + 1])
      } else {
        dp[i] = Math.min(dp[i], dp[j + 1] + t.length)
      }
    }
  }

  return dp[0];
};