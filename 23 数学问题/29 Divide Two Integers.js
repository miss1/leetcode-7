/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * 不能用乘法除法和mod，要求商
 * 先解决正号负号的问题，两个数一正一负结果为负，这时计数的tag为-1
 * 先暴力法，循环做加法并且累计做加法的次数(正数时累计1，负数时累计-1)，最后返回累计的次数。会超时
 * 为了减少计算次数，可以每次做加法时，加自身。比如 3 + 3 = 6，count = 2 -> 6 + 6 = 12, count = 2 + 2 = 4
 * 当累计的总和sum大于dividend时，计算出sum和dividend的差值，继续上一步
 * time: O(logn * logn)
 * space: O(1)
 */
var divide = function(dividend, divisor) {
  if (dividend === 0) return 0;
  let tag = 1;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) tag = -1;
  if (dividend < 0) dividend = 0 - dividend;
  if (divisor < 0) divisor = 0 - divisor;

  let res = 0;
  while (dividend >= divisor) {
    let count = tag, sum = divisor;
    while (sum + sum < dividend) {
      sum += sum;
      count += count;
    }
    res += count;
    dividend -= sum;
  }
  if (res > Math.pow(2, 31) - 1) return  Math.pow(2, 31) - 1;
  if (res < -Math.pow(2, 31)) return -Math.pow(2, 31);
  return res;
};
