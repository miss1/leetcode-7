/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 先计算s和t中每个字符的数量，hashmap存储数量差，遇到s则+1， 遇到t则-1
 * 最终map中存储的是去掉s和t的交集的字符数，负数表示存在于t但不存在于s。正数表示存在于s但不存在于t，正数和负数的数量一定相等，求该数量即可
 * time: O(n)
 * space: O(n)
 */
var minSteps = function(s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);
  }
  let res = 0;
  for (let [key, val] of map) {
    if (val > 0) res += val;
  }
  return res;
};