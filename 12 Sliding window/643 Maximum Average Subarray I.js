/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 固定窗口长度为k的滑动窗口，计算计算窗口内数字的平均值
 * time: O(n)
 * space: O(1)
 */
var findMaxAverage = function(nums, k) {
  let res = -Infinity, sum = 0;
  let left = 0, right = 0;
  while (right < nums.length) {
    if (right < k - 1) {
      sum += nums[right];
      right++;
    } else {
      sum += nums[right];
      res = Math.max(res, sum / k);
      right++;
      sum -= nums[left];
      left++;
    }
  }
  return res;
};