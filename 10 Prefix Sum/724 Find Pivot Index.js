/**
 * @param {number[]} nums
 * @return {number}
 * 先求nums的前缀和，再遍历前缀和数组，比较两边的值
 * time: O(n)
 * space: O(n)
 */
var pivotIndex = function(nums) {
  let size = nums.length;
  let prefixSum = new Array(size + 2).fill(0);
  for (let i = 0; i < size; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  let total = prefixSum[size];
  for (let i = 1; i < size + 1; i++) {
    if (total - prefixSum[i] === prefixSum[i - 1]) return i - 1;
  }
  return -1;
};