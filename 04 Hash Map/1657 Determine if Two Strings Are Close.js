/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 * 要满足题意需要满足三个条件
 * 1：word1和word2长度相等
 * 2：word1和word2拥有的字母相等，eg: word1 = 'aabbccc', 那word2中只能包含abc三个字母
 * 3：word1和word2中的字母数量相等，eg: word1 = 'aabbccc'; 2，2，3; 那word2中的三个字母的数量也应该符合2，2，3
 * time: O(n)
 * space: O(n)
 */
var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;
  const len = word1.length;
  let map1 = new Map(), map2 = new Map();
  for (let i = 0; i < len; i++) {
    map1.set(word1[i], map1.has(word1[i]) ? map1.get(word1[i]) + 1 : 1);
    map2.set(word2[i], map2.has(word2[i]) ? map2.get(word2[i]) + 1 : 1);
  }
  if (map1.size !== map2.size) return false;
  let count1 = new Map(), count2 = new Map();
  for (let item of map1) {
    if (!map2.has(item[0])) return false;
    count1.set(item[1], count1.has(item[1]) ? count1.get(item[1]) + 1 : 1);
    const n2 = map2.get(item[0]);
    count2.set(n2, count2.has(n2) ? count2.get(n2) + 1 : 1);
  }
  if (count1.size !== count2.size) return false;
  for (let item of count1) {
    if (!count2.has(item[0]) || count2.get(item[0]) !== item[1]) return false;
  }
  return true;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 * 和上面一样，用数组实现
 */
var closeStrings2 = function(word1, word2) {
  if (word1.length !== word2.length) return false;
  let w1 = new Array(26).fill(0);
  let w2 = new Array(26).fill(0);
  for (let i = 0; i < word1.length; i++) {
    w1[word1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    w2[word2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }
  for (let i = 0; i < 26; i++) {
    if ((w1[i] === 0 && w2[i] > 0) || (w2[i] === 0 && w1[i] > 0)) return false;
  }
  w1.sort((a, b) => a - b);
  w2.sort((a, b) => a - b);
  return w1.join(',') === w2.join(',');
};