/**
 * @param {number[]} nums
 * @return {number}
 * 求最长的递增/减子数组，双指针查找，如果不满足条件则重置左指针
 * time: O(n)
 * space: O(1)
 */
var longestMonotonicSubarray = function(nums) {
  let res = 1;
  let i = 0, j = 1;
  while (j < nums.length) {
    if (nums[j] <= nums[j - 1]) {
      res = Math.max(res, j - i);
      i = j;
    }
    j++;
  }
  res = Math.max(res, j - i);
  i = 0;
  j = 1;
  while (j < nums.length) {
    if (nums[j] >= nums[j - 1]) {
      res = Math.max(res, j - i);
      i = j;
    }
    j++;
  }
  res = Math.max(res, j - i);
  return res;
};
