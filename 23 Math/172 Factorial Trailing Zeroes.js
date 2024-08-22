/**
 * @param {number} n
 * @return {number}
 * 2 * 5 = 10，其实是要求1-n中能分解成多少个2和5，2的数量一定会比5多，所以只要求最多能得到多少个5
 * time: O(n/5)
 * space: O(n/5)
 */
var trailingZeroes = function(n) {
  if (n === 0) return 0;
  let res = 0, x = 5;
  let map = new Map();
  while (x <= n) {
    const t = (map.get(x / 5) || 0) + 1;
    map.set(x, t);
    res += t;
    x += 5;
  }
  return res;
};