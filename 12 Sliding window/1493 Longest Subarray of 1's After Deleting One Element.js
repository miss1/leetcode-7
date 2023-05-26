/**
 * @param {number[]} nums
 * @return {number}
 * 跟1004 类似
 * 当窗口里的0的个数大于1时，计算窗口长度，同时移动left，直到0的个数小于等于1
 * time: O(n)
 * space: O(1)
 */
var longestSubarray = function(nums) {
  let n = 1, res = 0;
  let left = 0, right = 0;
  while (right < nums.length) {
    if (nums[right] === 0) n--;
    if (n === -1) res = Math.max(res, right - left - 1);
    while (n === -1) {
      if (nums[left] === 0) n++;
      left++;
    }
    right++;
  }
  return Math.max(res, right - left - 1);
};