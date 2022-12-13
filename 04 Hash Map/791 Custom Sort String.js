/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 * 先将s存储到map中，然后遍历order，对于order中的每一个字符，判断它是否在map中，在的话，取出map中的值加入到result中
 * 遍历完成之后，将map中剩下的值添加到result
 * time: O(n)
 * space: O(n)
 */
var customSortString = function(order, s) {
  let map = new Map(), res = '';
  for (let item of s) {
    map.set(item, map.has(item) ? map.get(item) + item : item);
  }
  for (let c of order) {
    if (map.has(c)) {
      res += map.get(c);
      map.delete(c);
    }
  }
  for (let item of map) {
    res += item[1];
  }
  return res;
};