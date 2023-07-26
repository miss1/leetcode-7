/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 * dp, Brute Force, top-down
 * 每次选择，有两种情况，nums中选择最左边或者最右边的数.
 * 需要三个变量记录三个状态，i: multipliers的位置，left: nums中左边到达的位置，right: nums中右边到达的位置
 * dp(l,r,i) = max(multipliers[i] * nums[l] + dp(l+1, r, i+1), multipliers[i] * nums[r] + dp(l, r-1, i+1))
 * time: O(2 ^ m)
 * space: O(m)
 * Time Limit Exceeded
 */
var maximumScore = function(nums, multipliers) {
  const m = multipliers.length;
  const dp = function(left, right, i) {
    if (i === m) return 0;
    let r1 = multipliers[i] * nums[left] + dp(left + 1, right, i + 1);
    let r2 = multipliers[i] * nums[right] + dp(left, right - 1, i + 1);
    return Math.max(r1, r2);
  };
  return dp(0, nums.length - 1, 0);
};

/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 * dp, Top-down (Memoization)
 * 优化，已知已经做了left个operation，并且当前总共做了i个operation，可知，right的operation = i - left, 所以right的index = n - 1 - (i - left)
 * 用memo记录当memo[i][left]的值，避免重复计算
 * time: O(m²)
 * space: O(m + m²)
 */
var maximumScore2 = function(nums, multipliers) {
  const m = multipliers.length, n = nums.length;
  let memo = new Array(m).fill(null).map(val => new Array(n).fill(null));
  const dp = function(left, i) {
    if (i === m) return 0;
    if (memo[i][left] == null) {
      let right = n - 1 - (i - left);
      let r1 = multipliers[i] * nums[left] + dp(left + 1, i + 1);
      let r2 = multipliers[i] * nums[right] + dp(left, i + 1);
      memo[i][left] = Math.max(r1, r2);
    }
    return memo[i][left];
  };
  return dp(0, 0);
};

/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 * dp, Bottom-up (Tabulation)
 * time: O(m²)
 * space: O(m²)
 */
var maximumScore3 = function(nums, multipliers) {
  const m = multipliers.length, n = nums.length;
  let dp = new Array(m + 1).fill(0).map(val => new Array(m + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let left = i; left >= 0; left--) {
      let right = n - 1 - (i - left);
      let r1 = multipliers[i] * nums[left] + dp[i + 1][left + 1];
      let r2 = multipliers[i] * nums[right] + dp[i + 1][left];
      dp[i][left] = Math.max(r1, r2);
    }
  }
  return dp[0][0];
};