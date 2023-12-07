/**
 * @param {number[]} nums
 * @return {boolean}
 * 遍历，记录当前遇到的最小的值first，和大于first的第二小的值
 * first > second
 * 当nums[i] <= first时，更新first；此时如果nums[i] <= second，更新second，否则说明已经找到第三个值
 * time: O(n)
 * space: O(1)
 */
var increasingTriplet = function(nums) {
  let first = Infinity, second = Infinity;
  for (let n of nums) {
    if (n <= first) {
      first = n;
    } else if (n <= second) {
      second = n;
    } else {
      return true;
    }
  }
  return false;
};