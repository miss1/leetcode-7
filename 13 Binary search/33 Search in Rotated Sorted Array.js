/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 部分有序的数组。二分查找，如果mid的值大于等于left，说明[left, mid] 这一段是有序的。比较target和left以及mid的值来判断是否在这一区间内
 * 如果mid值小于right，说明[mid, right]是有序的，判断target是否在这一区间
 * time: O(logn)
 * space: O(1)
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[left]) {
      if (target < nums[mid] && target >= nums[left]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
};