/**
 * @param {number} n
 * @return {boolean}
 * n最大为10^9 < 2^30; 所以只要枚举，从2^0 到2^30中，对于每一个数，判断它每个数字的个数是否和n中每个数字的个数相等，相等返回true
 * time: O(30 * 10) -> O(1)
 * space: O(1)
 */
var reorderedPowerOf2 = function(n) {
  let count = new Array(10).fill(0);
  while (n > 0) {
    count[n % 10] += 1;
    n = Math.floor(n / 10);
  }
  for (let i = 0; i <= 30; i++) {
    let p = Math.pow(2, i);
    let c = new Array(10).fill(0);
    while (p > 0) {
      c[p % 10] += 1;
      p = Math.floor(p / 10);
    }
    let j = 0;
    while (j < 10) {
      if (count[j] === c[j]) j++;
      else break;
    }
    if (j === 10) return true;
  }
  return false;
};