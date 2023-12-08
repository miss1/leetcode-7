/**
 * @param {number[][]} costs
 * @return {number}
 * 贪心，先把所有人运往同一个城市。计算总花费
 * 再计算把每个人运往另一个城市需要的花费差价，多退少补（负数），再把差价排序，取前一半的人运往另一个城市。
 * time: O(n)
 * space: O(n)
 */
var twoCitySchedCost = function (costs) {
  let diff = [], res = 0;
  for (let cost of costs) {
    res += cost[0];
    diff.push(cost[1] - cost[0]);
  }
  diff.sort((a, b) => a - b);
  for (let i = 0; i < costs.length / 2; i++) {
    res += diff[i];
  }
  return res;
};
