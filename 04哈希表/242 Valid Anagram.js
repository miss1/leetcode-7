/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 哈希表存储字符串每个字符的个数，然后再遍历另一个字符串，看是否跟哈希表中存储的一样
 * time: O(n)
 * space: O(n)
 */
var isAnagram = function(s, t) {
  let map = new Map();
  for (let c of s) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  for (let c of t) {
    if (!map.has(c)) return false;
    if (map.get(c) === 1) map.delete(c);
    else map.set(c, map.get(c) - 1);
  }
  return map.size === 0;
};