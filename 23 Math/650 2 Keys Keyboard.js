/**
 * @param {number} n
 * @return {number}
 * 数学
 * for example in case of 24: 24 = 2 * 2 * 2 * 3, and result = 2+2+2+3
 * for something like 124: 124 = 2 * 2 * 31, and the result is as you guesses = 2+2+31
 * time: O(n)
 * space: O(1)
 */
var minSteps = function(n) {
  if (n === 1) return 0;
  let res = 0, i = 2;
  while (i <= n) {
    if (n % i === 0) {
      res += i;
      n = n / i;
    } else {
      i++;
    }
  }
  return res;
};