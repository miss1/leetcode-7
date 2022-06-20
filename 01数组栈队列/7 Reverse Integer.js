/**
 * @param {number} x
 * @return {number}
 * 数学问题
 * 每次取x中的最后一位，加到结果res中，每次添加时，res先乘以10
 * time: O(log10(x)) 大概为x转换为字符串的长度
 * space: O(1)
 */
var reverse = function(x) {
  let res = 0, num = Math.abs(x);
  let max = Math.pow(2, 31) - 1, min = -Math.pow(2, 31);
  while (num > 0) {
    let n = num % 10;
    num = Math.floor(num / 10);
    res = res * 10 + n;
    if (res > max || -res < min) return 0;
  }
  if (x < 0) res *= -1;
  return res;
};
