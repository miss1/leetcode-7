/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * dp, DFS暴力枚举，每个num都有两种情况，将两种情况下能得到结果的数量相加就是所求
 * 利用map存储已经得到的答案（到第i个数，和为total时，能得到target的数量），避免重复计算
 * time: O(n * Sum(nums))
 * space: O(n * Sum(nums))
 */
var findTargetSumWays = function(nums, target) {
  let map = new Map();
  const dp = function(i, total) {
    if (i === nums.length) return total === target ? 1 : 0;
    if (map.has(i + ',' + total)) return map.get(i + ',' + total);
    let count = dp(i + 1, total + nums[i]) + dp(i + 1, total - nums[i]);
    map.set(i + ',' + total, count);
    return count;
  };
  return dp(0, 0);
};
