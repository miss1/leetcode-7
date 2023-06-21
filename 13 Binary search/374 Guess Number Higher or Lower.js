/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 * time: O(logn)
 * space: O(1)
 */
var guessNumber = function(n) {
  let low = 1, high = n;
  while (low < high) {
    let mid = low + ((high - low) >> 1);
    if (guess(mid) === 0) return mid;
    if (guess(mid) === -1) high = mid;
    else low = mid + 1;
  }
  return low;
};