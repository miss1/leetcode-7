/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * LCS, 最长公共子序列
 * 定义一个二维数组res, res[i][j]存储以text1[i]和text2[j]为起点时，最长的公共子序列长度
 * 从两个字符串末尾开始寻找，当text1[i]等于text2[j]时 res[i][j] = res[i+1][j+1] + 1
 * text1[i]不等于text2[j]时，需要舍弃text1[i]或者text2[j]，然后寻找答案，所以res[i][j] = Math.max(res[i + 1][j], res[i][j + 1])
 * time: O(n * m)
 * space: O(n * m)
 */
var longestCommonSubsequence = function(text1, text2) {
  let res = new Array(text1.length + 1).fill(0).map(val => new Array(text2.length + 1).fill(0));
  let longestLength = 0;
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) res[i][j] = res[i + 1][j + 1] + 1;
      else res[i][j] = Math.max(res[i + 1][j], res[i][j + 1]);
      longestLength = Math.max(longestLength, res[i][j]);
    }
  }
  return longestLength;
};
