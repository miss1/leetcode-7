/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * 要计算s中包含words所有字串的第一个索引，words中每个字符的长度相等
 * 先用一个map存储words中的字符，字符为key，数量为value。计算words总长度 words[0].length*words.length。
 * 遍历字符串s，从当前位置left开始截取长度为words总长度的字符串y，将y按words[0]的长度分解出单词，将分解出的单词存储到map2中。
 * 比较map和map2中每个单词的数量
 * time: O(n*m*k) n: s的长度，m: words的长度，k: 单个word的长度
 * space: O(m), m为words长度
 */
var findSubstring = function(s, words) {
  let map = new Map(), map2 = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) map.set(words[i], map.get(words[i]) + 1);
    else map.set(words[i], 1);
  }
  let single = words[0].length;
  let wordsLength = single * words.length;
  let left = 0, res = [];
  while (left < s.length - wordsLength + 1) {
    let end = wordsLength + left, start = left;
    map2.clear();
    for (; start < end; start += single) {
      let key = s.substr(start, single);
      if (!map.has(key)) break;
      if (map2.has(key)) map2.set(key, map2.get(key) + 1);
      else map2.set(key, 1);
      if (map2.get(key) > map.get(key)) break;
    }
    if (start === end) res.push(left);
    left++;
  }
  return res;
};
