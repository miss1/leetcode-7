/**
 * @param {number[]} nums
 * @return {number}
 * 暴力解法，两层循环得到所有的subarray，并计算出max-min
 * time: O(n²)
 * space: O(1)
 */
var subArrayRanges = function(nums) {
  let min = 0, max = 0, sum = 0;
  for (let i = 0; i < nums.length; i++) {
    min = nums[i];
    max = nums[i];
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > max) max = nums[j];
      if (nums[j] < min) min = nums[j];
      sum += max - min;
    }
  }
  return sum;
};