/**
 * @param {number} n
 * @return {boolean}
 * Just divide by 2, 3 and 5 as often as possible and then check whether we arrived at 1.
 * time: O(logn)
 * space: O(1)
 */
var isUgly = function(n) {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 2 === 0) n = n / 2;
    else if (n % 3 === 0) n = n / 3;
    else if (n % 5 === 0) n = n / 5;
    else return false;
  }
  return n === 1;
};
