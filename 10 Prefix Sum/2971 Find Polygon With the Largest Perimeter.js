/**
 * @param {number[]} nums
 * @return {number}
 * 其实就是求前缀和，判断prefixSum[i]是否会大于nums[i + 1]
 * time: O(nlogn)
 * space: O(logn)
 */
var largestPerimeter = function(nums) {
  nums.sort((a, b) => a - b);
  let prefixSum = nums[0], res = -1;
  for (let i = 1; i < nums.length - 1; i++) {
    prefixSum += nums[i];
    if (prefixSum > nums[i + 1]) {
      res = Math.max(res, prefixSum + nums[i + 1]);
    }
  }
  return res;
};
