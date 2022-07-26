/**
 * @param {number[]} prices
 * @return {number}
 * 遍历prices，记录最小值，如果当前值比最小值小，更新最小值。比最小值大，则更新最大收益
 * time: O(n)
 * space: O(1)
 */
var maxProfit = function(prices) {
  let minPrices = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrices) {
      minPrices = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrices);
    }
  }
  return maxProfit;
};
