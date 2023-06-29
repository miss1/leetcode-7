/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * time: O(logn)
 * space: O(1)
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};