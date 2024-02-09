/**
 * @param {number[]} nums
 * @return {number[]}
 * DP
 * 先对nums排序
 * 从末尾开始遍历nums，dp存储以nums[i]开头时能得到的最长subset
 * 因为nums是升序的，所以判断时，第一个数nums[i]的下一个数能整除它，则后面的数都能整除它
 * eg: subset = [4,8,24], 4能整除2，则4，8，24都能整除2
 * time: O(n * n)
 * space: O(n * n)
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let dp = new Array(n).fill(0).map((val, idx) => [nums[idx]]);
  let res = [nums[0]];
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (dp[j][0] % nums[i] === 0 && dp[j].length + 1 > dp[i].length) {
        dp[i] = [nums[i], ...dp[j]];
      }
    }
    if (dp[i].length > res.length) res = dp[i];
  }
  return res;
};