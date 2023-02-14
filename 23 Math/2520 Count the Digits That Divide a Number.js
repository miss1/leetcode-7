/**
 * @param {number} num
 * @return {number}
 * 遍历判断num中的每一位数字是否能被num整除
 * time: O(n) n: num的长度
 * space: o(1)
 */
var countDigits = function(num) {
  let count = 0;
  let n = num;
  while (n > 0) {
    let p = n % 10;
    if (num % p === 0) count++;
    n = Math.floor(n / 10);
  }
  return count;
};