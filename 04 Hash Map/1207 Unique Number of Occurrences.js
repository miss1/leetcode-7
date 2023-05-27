/**
 * @param {number[]} arr
 * @return {boolean}
 * hashmap记录每个数的数量， 再将数量存储到set中，最后判断set长度是否和map长度相等
 * time: O(n)
 * space: O(n)
 */
var uniqueOccurrences = function(arr) {
  let map = new Map();
  for (let item of arr) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  }
  let set = new Set();
  for (let item of map) {
    set.add(item[1]);
  }
  return map.size === set.size;
};