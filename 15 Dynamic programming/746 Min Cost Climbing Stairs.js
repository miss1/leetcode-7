/**
 * @param {number[]} cost
 * @return {number}
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
