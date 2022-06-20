/**
 * @param {string[]} words
 * @return {number}
 * 将没给单词反向输入trie树，因为是要求相同后缀，所以要从单词的末尾开始输入
 * 用map存储每个单词的长度，如果单词是某个词的后缀，则将数量置为0
 * time: o(n * m), n为words长度，m为每个单词的长度
 * space: O(n * m)
 */
var minimumLengthEncoding = function(words) {
  let root = {}, sum = 0;
  let map = new Map();
  const insert = function(word) {
    let node = root, tmp = '';
    for (let i = word.length - 1; i >= 0; i--) {
      let c = word[i];
      if (!node[c]) node[c] = {};
      node = node[c];
      tmp += c;
      if (map.has(tmp)) map.set(tmp, 0);
    }
    if (Object.keys(node).length <= 0) map.set(tmp, word.length);
  };
  for (let word of words) {
    insert(word);
  }
  for (let item of map) {
    if (item[1] !== 0) sum += item[1] + 1;
  }
  return sum;
};
