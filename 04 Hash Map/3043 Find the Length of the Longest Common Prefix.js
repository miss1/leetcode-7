/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 * 先用hashmap记录arr1中的所有prefix
 * 再逐个检查arr2中的prefix是否在hashmap中
 * time: O(m*d)
 * space: O(m*d)
 */
var longestCommonPrefix = function(arr1, arr2) {
  let set = new Set();

  for (let n of arr1) {
    let t = '', a = String(n);
    for (let c of a) {
      t += c;
      set.add(t);
    }
  }

  let res = 0;
  for (let n of arr2) {
    let t = '', a = String(n);
    for (let c of a) {
      t += c;
      if (set.has(t)) res = Math.max(res, t.length);
    }
  }

  return res;
};