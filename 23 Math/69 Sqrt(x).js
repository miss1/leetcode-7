/**
 * @param {number} x
 * @return {number}
 * 二分，left = 0，right = x，每次取left和right的中点判断中点的平方值是否是答案，然后根据平方值移动left和right
 * time: O(logx)
 * space: O(1)
 */
var mySqrt = function(x) {
  let left = 0, right = x;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (mid * mid > x) right = mid - 1;
    else if (mid * mid < x) left = mid + 1;
    else return mid;
  }
  return right;
};