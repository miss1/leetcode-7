/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * 当天的最大收益取决于前一天的最大收益
 * 每天中，有三个选择，买入，卖出，什么都不做
 * 用两个dp array存储当天的状态
 * free：当天交易后不持有stock时的最大收益，有两种情况。取更大值
 * - 前一天是持有stock状态，今天卖出。 p1 = hold[i - 1] + prices[i] - fee
 * - 前一天是free状态，今天什么也不做。p2 = free[i - 1]
 * hold：当天交易后持有stock时的最大收益。有两种情况。取更大值
 * - 前一天是持有状态，今天什么也不做。 p1 = hold[i - 1]
 * - 前一天是free状态，今天买入stock。 p2 = free[i - 1] - prices[i]
 * 最后返回最后一天free状态下的最大收益即可
 * time: O(n)
 * space: O(n)
 */
var maxProfit = function(prices, fee) {
  let n = prices.length;
  let free = new Array(n).fill(0), hold = new Array(n).fill(0);
  hold[0] = -prices[0];
  for (let i = 1; i < n; i++) {
    hold[i] = Math.max(hold[i - 1], free[i - 1] - prices[i]);
    free[i] = Math.max(free[i - 1], hold[i - 1] + prices[i] - fee);
  }
  return free[n - 1];
};