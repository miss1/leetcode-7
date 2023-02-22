/**
 * @param {number[]} nums
 * @return {number}
 * time: O(n²)
 * space: O(1)
 */
var triangularSum = function(nums) {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums.pop();
  }
  return nums[0];
};