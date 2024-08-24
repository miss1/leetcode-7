/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 * dp存储s中以i开头，s.length结尾的字符串，存在的sentences
 * 如果s[i]-s[j]组成的字符串是一个word，可知dp[j+1]是以j+1为开头有的sentences，则只需要遍历dp[j+1]，将是s[i~j]添加到每一个sentences中，就是dp[i]的值
 * time: O(n*n*n)
 * space: o(n*n)
 */
var wordBreak = function(s, wordDict) {
  const set = new Set(wordDict), n = s.length;
  const dp = new Array(n + 1).fill(0).map(val => []);
  for (let i = n - 1; i >= 0; i--) {
    // 以s[i]开头的字符串
    let ch = '';
    for (let j = i; j < n; j++) {
      ch += s[j];
      // s[i~j]s是一个word，则遍历dp[j+1]
      if (set.has(ch)) {
        if (dp[j + 1].length === 0) dp[i].push(ch);
        else {
          for (let t of dp[j + 1]) {
            dp[i].push(ch + ' ' + t);
          }
        }
      }
    }
  }
  return dp[0].filter(item => item.split(' ').join('') === s);
};