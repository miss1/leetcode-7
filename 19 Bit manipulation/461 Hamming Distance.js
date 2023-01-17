/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 先异或，再累计1的数量
 * time: o(1)
 * space: O(1)
 */
var hammingDistance = function(x, y) {
  let n = x ^ y, res = 0;
  while (n > 0) {
    if (n & 1 === 1) res += 1;
    n = n >> 1;
  }
  return res;
};