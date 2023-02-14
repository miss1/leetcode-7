/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * 先找出范围内的所有质数，按大小顺序存储到数组，再计算相邻数字的差值，取差值最小的一对
 * time: O(n)
 * space: O(n)
 */
var closestPrimes = function(left, right) {
  const isPrimeNumber = function(n) {
    if (n < 2) return false;
    for (let k = 2; k <= Math.sqrt(n); k++) {
      if (n % k === 0) return false;
    }
    return true;
  }
  let arr = [], res = [-1, -1], n = left;
  while (n <= right) {
    if (isPrimeNumber(n)) {
      if (arr.length === 1) res = [arr[0], n];
      else {
        if (n - arr[arr.length - 1] < res[1] - res[0]) res = [arr[arr.length - 1], n];
      }
      arr.push(n);
    }
    n++;
  }
  return res;
};