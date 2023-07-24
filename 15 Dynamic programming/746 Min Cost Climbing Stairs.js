/**
 * @param {number[]} cost
 * @return {number}
 * Bottom-up
 * 爬楼梯问题， f(n) = Math.min(f(n-2), f(n-1)) + f(n)
 * 到第n阶的花费等于到n-1阶和到n-2阶中花费的更小值加上当先花费。
 * 要求走完所有台阶，可以由最后一格或者倒数第二格到达，所以返回值是取两个中的最小值
 * time: O(n)
 * space: O(1)
 */
var minCostClimbingStairs = function(cost) {
  let a = cost[0], b = cost[1];
  for (let i = 2; i < cost.length; i++) {
    let res = Math.min(a, b) + cost[i];
    a = b;
    b = res;
  }
  return Math.min(a, b);
};

/**
 * @param {number[]} cost
 * @return {number}
 * Top-down, Recursion with Memoization
 */
var minCostClimbingStairs2 = function(cost) {
  let memo = new Map();
  const dp = function(i) {
    if (i === 0 || i === 1) return 0;
    if (!memo.has(i)) memo.set(i, Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2]));
    return memo.get(i);
  };
  return dp(cost.length);
};