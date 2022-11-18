/**
 * @param {number} x
 * @return {number}
 * 二分，找最右边小于等于x的值
 * time: O(logx)
 * space: O(1)
 */
var mySqrt = function(x) {
  let res = 0, left = 0, right = x;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    let n = mid * mid;
    if (n === x) return mid;
    else if (n > x) right = mid - 1;
    else {
      left = mid + 1;
      res = mid;
    }
  }
  return res;
};