/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 * 用一个数组dp记录长度为i时，good strings的数量。初始化dp[0] = 1
 * 由题目可知，dp[i]中的string只有两种情况：1，以zero个0结尾；2，以one个1结尾
 * 1，以zero个0结尾：可得string除去尾部(zero个0)的数量为dp[i - zero], 所以dp[i]以zero个0结尾的string的数量为dp[i - zero]
 * 2，以one个1结尾，同理可得dp[i]以one个1结尾的string的数量为dp[i - one]
 * 最后求出dp中每个item的值后，遍历dp，累加下标从low到high的值即可
 * time: O(high)
 * space: O(high)
 */
var countGoodStrings = function(low, high, zero, one) {
  let dp = new Array(high + 1).fill(0);
  dp[0] = 1;
  let mod = Math.pow(10, 9) + 7;
  for (let i = 1; i <= high; i++) {
    if (i >= zero) {
      dp[i] += dp[i - zero];
    }
    if (i >= one) {
      dp[i] += dp[i - one];
    }
    dp[i] %= mod;
  }
  let res = 0;
  for (let i = low; i <= high; i++) {
    res += dp[i];
    res %= mod;
  }
  return res;
};