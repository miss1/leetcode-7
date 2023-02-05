/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 * 前缀和，计算出从0到当前位置一共有多少个字符串满足条件
 * 从i到j的个数则为helper[i] - helper[j]
 * time: O(n)
 * space: O(n)
 */
var vowelStrings = function(words, queries) {
  let helper = new Array(words.length + 1).fill(0);
  let set = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (set.has(word[0]) && set.has(word[word.length - 1])) {
      helper[i + 1] = helper[i] + 1;
    } else {
      helper[i + 1] = helper[i];
    }
  }
  let result = [];
  for (let querie of queries) {
    result.push(helper[querie[1] + 1] - helper[querie[0]]);
  }
  return result;
};