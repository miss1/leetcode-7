/**
 * @param {number[]} nums
 * @return {number[]}
 * 前缀和。遍历nums，计算出n每个数左边所有数的乘积，存储到left中。再倒序遍历nums，计算出每个数右边所有数的乘积，存储到right中
 * 所以除了nums[i]以外的所有数的乘积等于 left[i] * right[i]
 * time: O(n)
 * space: O(n)
 */
var productExceptSelf = function(nums) {
  let left = new Array(nums.length).fill(1);
  let right = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = left[i] * right[i];
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 上面方法的优化，先算出每个数左边所有数的乘积；再倒序遍历nums, 计算结果的同时记录右边所有数据的乘积
 * time: O(n)
 * space: O(1) (The output array does not count as extra space for space complexity analysis.)
 */
var productExceptSelf2 = function(nums) {
  let res = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    res[i] = nums[i - 1] * res[i - 1];
  }
  let right = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    res[i] = res[i] * right;
    right = right * nums[i];
  }
  return res;
};
