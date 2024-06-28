/**
 * @param {number[]} nums
 * @return {number}
 * 这题的描述太糟糕了，题目很难理解
 * 题目是说给一个array，我们可以将它分成任意个subarray
 * 对于每个subarray，和等于 sub[0]*1 + sub[1]*(-1) + sub[2]*1 + .... sub[n]*(-1^n)。要求所有subarray的总和最大是多少
 * 也就是说我们要求nums的和，对于每一个数，可以选择乘以-1或者取原值。如果当前值要乘以-1，则它前一个值不能乘以-1；当前不乘以-1的话，则前一个值无所谓，因为可以拿当前值开始一个新的subarray
 * dp[i][0]: 当前值不乘以-1时，以当前值结尾，得到的最大值, dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]) + nums[i];
 * dp[i][1]: 当前值乘以-1时，以当前值结尾，得到的最大值, dp[i][1] = dp[i - 1][0] - nums[i];
 * time: O(n)
 * space: O(2n)
 */
var maximumTotalCost = function(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0).map(val => new Array(2).fill(0));
  dp[0][0] = nums[0];
  dp[0][1] = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]) + nums[i];
    dp[i][1] = dp[i - 1][0] - nums[i];
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1]);
};