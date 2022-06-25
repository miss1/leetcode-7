/**
 * @param {number[]} nums
 * @return {boolean}
 * 要保证数组是非递减的。遍历数组，当nums[i]小于前一个数时，有两种选择，改变nums[i-1]的值或者改变nums[i]的值
 * time: O(n)
 * space: O(1)
 */
var checkPossibility = function(nums) {
  let n = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      n++;
      if (n > 1) return false;
      if (i - 2 >= 0 && nums[i - 2] > nums[i]) nums[i] = nums[i - 1];
      else nums[i - 1] = nums[i];
    }
  }
  return n <= 1;
};