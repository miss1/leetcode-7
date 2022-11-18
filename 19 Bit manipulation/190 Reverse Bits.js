/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * 利用mask左移获取当前位置的值是0还是1，然后计算值
 * time: O(1)
 * space: O(1)
 */
var reverseBits = function(n) {
  let res = 0, mask = 1;
  for (let i = 31; i >= 0; i--) {
    if ((mask & n) !== 0) res += Math.pow(2, i);
    mask = mask << 1;
  }
  return res;
};