/**
 * @param {number[]} nums
 * @return {number}
 * DP, 新建数组记录下到达每一个数字需要的最小步数
 * time: O(n²)
 * space: O(n)
 */
var jump = function(nums) {
  let length = nums.length;
  let dp = new Array(length).fill(null);
  dp[0] = 0;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] != null && i - j <= nums[j]) dp[i] = dp[i] ? Math.min(dp[i], dp[j] + 1) : dp[j] + 1;
    }
  }
  return dp[length - 1];
};

/**
 * @param {number[]} nums
 * @return {number}
 * 贪心。遍历nums，记录下当前能跳到的最远地方farthest，当i到达currentEnd时，说明需要跳一次
 * time: O(n)
 * space: O(1)
 */
var jump2 = function(nums) {
  let jumps = 0, currentEnd = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }
  return jumps;
};