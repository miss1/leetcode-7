/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * time: O(n)
 * space: O(1)
 * 滑动窗口，可变窗口大小
 */
var minSubArrayLen = function(target, nums) {
  let l = 0, sum = 0;
  let res = nums.length + 1;
  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      res = Math.min(res, r - l + 1);
      sum -= nums[l];
      l++;
    }
  }
  return res === nums.length + 1 ? 0 : res;
};