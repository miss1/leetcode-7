/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * 二分
 * time: O(logn)
 * space: O(1)
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1, right = n;
    let res = null;
    while (left <= right) {
      let mid = left + ((right - left) >> 1);
      if (isBadVersion(mid)) {
        res = mid;
        right = mid - 1;
      }
      else left = mid + 1;
    }
    return res;
  };
};