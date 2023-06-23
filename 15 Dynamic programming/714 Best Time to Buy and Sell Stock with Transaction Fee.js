/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
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