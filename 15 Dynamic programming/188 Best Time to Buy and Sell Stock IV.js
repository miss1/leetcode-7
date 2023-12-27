/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 * DP, dp[i][t][k] 存储当只有前i个prices时，状态为t时，做了k次交易后的最大收益
 * t: 0 -> 未持有stock, 1 -> 手中持有stock；只有卖出一次后才算完成1次交易
 * 当天的最大收益取决于前一天的最大收益，每天交易过后有两种状态，持有，未持有
 * 每一天的收益，分两种情况
 * 当天结束后，未持有stock，dp[i][0][k]
 * > 前一天结束是未持有状态，则今天什么都不做, p = dp[i - 1][0][k]
 * > 前一天结束是持有状态，则今天卖出，完成一次交易，p = dp[i - 1][1][k - 1] + prices[i]
 * 当天结束后，持有stock，dp[i][1][k]
 * > 前一天结束是未持有状态, 则今天买入， p = dp[i - 1][0][k] - prices[i]
 * > 前一天结束是持有状态，则今天什么都不做，p = dp[i - 1][1][k]
 * time: O(k * n)
 * space: O(k * n)
 */
var maxProfit = function(k, prices) {
  const n = prices.length;
  let dp = new Array(n).fill(0).map(val => [0, 0].map(v => new Array(k + 1).fill(-Infinity)));

  // base, 尚未完成一次交易时的状态(k = 0)
  dp[0][0][0] = 0;
  dp[0][1][0] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0][0] = 0
    dp[i][1][0] = Math.max(-prices[i], dp[i - 1][1][0]);
  }

  // dp
  for (let x = 1; x <= k; x++) {
    for (let i = 1; i < n; i++) {
      dp[i][0][x] = Math.max(dp[i - 1][0][x], dp[i - 1][1][x - 1] + prices[i]);
      dp[i][1][x] = Math.max(dp[i - 1][0][x] - prices[i], dp[i - 1][1][x]);
    }
  }
  return Math.max(...dp[n - 1][0]);
};
