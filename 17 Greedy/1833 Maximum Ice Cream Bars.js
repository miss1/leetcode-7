/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 * 贪心，要得到最大数量，每次取最小值，知道coins为0为止
 * 先将costs排序，再遍历计数即可
 * time: O(nlogn)
 * space: O(logn)
 */
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);
  let res = 0;
  for (let item of costs) {
    if (coins >= item) {
      res += 1;
      coins = coins - item;
    } else {
      return res;
    }
  }
  return res;
};

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 * 与上面思路一致，贪心。
 * 用桶排序思路，新建一个数组存储每一个cost的个数，cost为下标，value为个数
 * 遍历新数组，计算coins，记录结果
 * time: O(n)
 * space: O(n)
 */
var maxIceCream2 = function(costs, coins) {
  let size = Math.max(...costs) + 1;
  let count = new Array(size).fill(0);
  for (let item of costs) {
    count[item] += 1
  }
  let res = 0;
  for (let i = 1; i < size; i++) {
    if (coins < i * count[i]) {
      res += Math.floor(coins / i);
      return res;
    } else {
      res += count[i];
      coins -= i * count[i];
    }
  }
  return res;
};