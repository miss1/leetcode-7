/**
 * @param {number} n
 * @return {boolean}
 * time: O(log3N)
 * space: O(1)
 */
var isPowerOfThree = function(n) {
  if (n < 1) return false;
  while (n % 3 === 0) {
    n = Math.floor(n / 3);
  }
  return n === 1;
};