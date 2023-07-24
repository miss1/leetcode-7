/**
 * @param {number[]} nums
 * @return {number}
 * Bottom-up
 * f(n) = Math.max(f(n - 2) + nums[n], f(n - 1))
 * time: O(n)
 * space: O(1)
 */
var rob = function(nums) {
  let a = 0, b = 0;
  for (let i = 0; i < nums.length; i++) {
    let res = Math.max(a + nums[i], b);
    a = b;
    b = res;
  }
  return Math.max(a, b);
};

/**
 * @param {number[]} nums
 * @return {number}
 * Top-down, Recursion with Memoization
 * time: O(n)
 * space: O(n)
 */
var rob2 = function(nums) {
  let memo = new Map();
  const dp = function(i) {
    if (i === 0) return nums[0];
    if (i === 1) return Math.max(nums[0], nums[1]);
    if (!memo.has(i)) memo.set(i, Math.max(dp(i - 1), dp(i - 2) + nums[i]));
    return memo.get(i);
  };
  return dp(nums.length - 1);
};
