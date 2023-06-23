/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 二维数组memo存储当两个word分别以word1[i] 和word2[j]结尾时的答案
 * 当word1[i] === word2[j]时， memo[i][j] = memo[i][j] = memo[i - 1][j - 1];
 * 当不相等时，则取上左，斜对角三个方向，取最小值，然后+1
 * eg: abc & aqc
 *        ''  'a'  'aq'  'aqc'
 *    ''  0    1    2      3
 *   'a'  1    0    1      2
 *  'ab'  2    1    1      2
 * 'abc'  3    2    2      1
 * time: O(mn)
 * space: O(mn)
 */
var minDistance = function(word1, word2) {
  const m = word1.length, n = word2.length;

  if (m === 0) return n;
  if (n === 0) return m;

  const memo = new Array(m + 1).fill(0).map(val => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    memo[i][0] = i;
  }

  for (let j = 1; j <= n; j++) {
    memo[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        memo[i][j] = Math.min(memo[i][j - 1], memo[i - 1][j], memo[i - 1][j - 1]) + 1;
      }
    }
  }

  return memo[m][n];
};