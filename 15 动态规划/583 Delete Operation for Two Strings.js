/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 其实是求LCS, 最长公共子序列。求出两个数组的最长公共子序列。两个word的长度减去子序列长度就是要删除的长度
 * time: O(m * n)
 * space: O(m * n)
 */
var minDistance = function(word1, word2) {
  let res = new Array(word1.length + 1).fill(0).map(val => new Array(word2.length + 1).fill(0));
  for (let i = word1.length - 1; i >= 0 ; i--) {
    for (let j = word2.length - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) res[i][j] = res[i + 1][j + 1] + 1;
      else res[i][j] = Math.max(res[i][j + 1], res[i + 1][j]);
    }
  }
  return word1.length + word2.length - 2 * res[0][0];
};
