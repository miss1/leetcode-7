/**
 * @param {number[]} nums
 * @return {number}
 * 跟153题同样的解法。只是多一步去重的操作。当nums[mid] === nums[right]时，right左移一步，去除当前的重复值
 * time: O(logn)
 * space: O(1)
 */
var findMin = function(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (nums[left] < nums[right]) return nums[left];
    if (nums[mid] > nums[right]) left = mid + 1;
    else if (nums[mid] < nums[right]) right = mid;
    else right -= 1;
  }
  return nums[left];
};
