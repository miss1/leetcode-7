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


/**
 * @param {string[]} words
 * @return {string}
 * 比较巧妙的一个方法。先将words按字典序排序，然后遍历words
 * 当当前字符word长度为1或者word去掉最后一个字符在set中存在时，说明当前word是一个解。存入set中，并且更新最优解
 * 注：因为words已经排过序了，所以如果word是一个解，那么它前面的字符肯定已经在set里了
 * eg：[a, ap, app, appl, apply]; a进入set，ap: a在set中说明ap是一个解，存到set. app: ap 在set中....
 * time: O(n), n为words长度
 * space: O(n)
 */
var longestWord2 = function(words) {
  let res = '', set = new Set();
  words.sort();
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1 || set.has(words[i].slice(0, -1))) {
      set.add(words[i]);
      if (words[i].length > res.length) res = words[i];
      else if (words[i].length === res.length) res = words[i] < res ? words[i] : res;
    }
  }
  return res;
};
