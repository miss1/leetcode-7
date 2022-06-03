/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * 完全背包问题。硬币就是物品，amount就是背包大小
 * time: O(n * amount)
 * space: O(amount)
 */
var change = function(amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp[amount];
};
