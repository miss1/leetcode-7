/**
 * @param {string} s
 * @return {string}
 * 先计算出每个字符的个数，再将字符按个数排序。如果最大个数的字符的个数大于s总长度的一半，说明这个字符一定有相邻的
 * 定义一个长度为s长度的数组，将字符按排好的顺序，间隔插入数组
 * time: O(nlogn) 排序
 * space: O(n)
 */
var reorganizeString = function(s) {
  let map = new Map();
  for (let c of s) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  let mapArray = Array.from(map);
  mapArray.sort((a, b) => b[1] - a[1]);
  if (mapArray[0][1] > Math.ceil(s.length / 2) ) return '';
  let array = new Array(s.length);
  let i = 0;
  for (let c of mapArray) {
    let count = c[1], key = c[0];
    while (count > 0) {
      if (i >= s.length) i = 1;
      array[i] = key;
      i += 2;
      count--;
    }
  }
  return array.join('');
};