/**
 * @param {number} num
 * @return {boolean}
 * 从1 - num中找到一个数n，使n * n = num
 * 二分查找
 * time: O(logn)
 * space: O(1)
 */
var isPerfectSquare = function(num) {
  let l = 0, r = num;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    let p = mid * mid;
    if (p === num) return true;
    if (p < num) l = mid + 1;
    else r = mid - 1;
  }
  return false;
};
