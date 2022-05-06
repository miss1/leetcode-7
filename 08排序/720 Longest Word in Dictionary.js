/**
 * @param {string[]} words
 * @return {string}
 * 注意题意，题目是要求找最长的单词，这个单词需要能从words数组中一步一步构建。
 * 比如'work', words中必须要有'w','wo','wor', 才能算是一个答案
 * 先将words逆序排序，再遍历每个单词，判断单词是否满足条件
 * time: O(m*n), m为words长度，n为单词的长度
 * space: O(1)
 */
var longestWord = function(words) {
  let res = '';
  words.sort((a,b) => b.length - a.length);
  for (let i = 0; i < words.length; i++) {
    let j = 0, w = '';
    while (j < words[i].length - 1) {
      w += words[i][j];
      if (words.indexOf(w) === -1) break;
      j++;
    }
    if (j === words[i].length - 1) {
      if (res === '') res = words[i];
      else {
        if (words[i].length < res.length) return res;
        else res = words[i] < res ? words[i] : res;
      }
    }
  }
  return res;
};
