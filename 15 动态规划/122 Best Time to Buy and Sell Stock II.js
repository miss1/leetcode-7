/**
 * @param {number[]} prices
 * @return {number}
 * 要保持最大收益，只要在最低价买入，再价格降之前卖出。即在价格波动途中，计算出所有上升趋势的线段的价格差即可
 * 即求数组中连续递增的部分，这部分的差值和
 * time: O(n)
 * space: O(1)
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
