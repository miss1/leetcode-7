/**
 * @param {string} s
 * @return {string}
 * 用哈希表存储每个字符出现的次数，再将哈希表转换成数组进行排序，用排序好的数组输出答案
 * time: O(n + klogk) n为s的长度，k为去重之后的字符数量
 * space: O(k)
 */
var frequencySort = function(s) {
  let map = new Map();
  for (let c of s) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }
  let arr = Array.from(map);
  arr.sort((a, b) => b[1] - a[1]);
  let res = '';
  for (let item of arr) res += item[0].repeat(item[1]);
  return res;
};
