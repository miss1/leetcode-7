/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Find the longest subarray with at most K zeros
 * 移动窗口，当窗口里的0的个数大于k时，移动左指针，直到0的个数小于等于k
 * time: O(n)
 * space: O(1)
 */
var longestOnes = function(nums, k) {
  let res = 0;
  let i = 0, j = 0;
  while (j < nums.length) {
    if (nums[j] === 0) k--;
    if (k === -1) res = Math.max(res, j - i);
    while (k < 0) {
      if (nums[i] === 0) k++;
      i++;
    }
    j++;
  }
  return Math.max(res, j - i);
};