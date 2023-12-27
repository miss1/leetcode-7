/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 * DP，获取days的最大值last，dp记录前last天的最小值
 * dp[i] = min(dp[i - 1] + costs[0], dp[i - 7] + costs[1], dp[i - 30] + costs[2])
 * time: O(k) K = max(days)
 * space: O(k)
 */
var mincostTickets = function(days, costs) {
  const last = days[days.length - 1];
  let dp = new Array(last + 1).fill(0);
  let i = 0;
  for (let d = 1; d <= last; d++) {
    if (d < days[i]) {
      dp[d] = dp[d - 1];
    } else {
      i++;
      dp[d] = Math.min(dp[d - 1] + costs[0], dp[d >= 7 ? d - 7 : 0] + costs[1], dp[d >= 30 ? d - 30 : 0] + costs[2]);
    }
  }
  return dp[last];
};
