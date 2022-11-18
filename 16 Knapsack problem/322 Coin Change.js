/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 完全背包问题。硬币就是物品，amount就是背包大小
 * time: O(n * amount)
 * space: O(amount)
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], 1 + dp[j - coins[i]]);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
