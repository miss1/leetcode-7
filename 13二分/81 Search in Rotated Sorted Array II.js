/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 * 二分查找，部分有序数组，含重复数字。
 * 解法跟33题是一个思路，只是多了一种nums[mid] === nums[left]的情况。出现这种情况时，可以将left右移一步，跳过这个重复数字
 * time: O(logn)
 * space: O(1)
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return true;
    while (left < mid && nums[left] === nums[mid]) left++;  // 跳过重复数字
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else if (nums[mid] < nums[left]) {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return false;
};