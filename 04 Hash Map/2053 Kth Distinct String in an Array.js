/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 * hashmap记录每个item的个数。再找第k个
 * time: O(n)
 * space: O(n)
 */
var kthDistinct = function(arr, k) {
  const map = new Map();
  for (let a of arr) {
    map.set(a, (map.get(a) || 0) + 1);
  }

  for (let [key, val] of map) {
    if (val === 1) {
      k--;
      if (k === 0) return key;
    }
  }

  return '';
};