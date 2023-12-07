/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 * 注意：每一行两边杯子的水会越来越少，所以不能单纯的等分计算
 * 当前杯子的水量取决于上一行两个杯子的水量
 * dp，dp[i][j] = (dp[i][j-1] - 1) / 2 + (dp[i][j] - 1) / 2
 * time: O(n²)
 * space: O(n²)
 */
var champagneTower = function(poured, query_row, query_glass) {
  let dp = new Array(query_row + 1).fill(0).map(() => new Array(query_row + 1).fill(0));
  dp[0][0] = poured;
  for (let i = 1; i <= query_row; i++) {
    for (let j = 0; j <= i; j++) {
      let left = dp[i - 1][j - 1] > 1 ? (dp[i - 1][j - 1] - 1) / 2 : 0;
      let right = dp[i - 1][j] > 1 ? (dp[i - 1][j] - 1) / 2 : 0;
      if (j === 0) dp[i][j] = right;
      else if (j === i) dp[i][j] = left;
      else dp[i][j] = left + right;
    }
  }
  return dp[query_row][query_glass] > 1 ? 1 : dp[query_row][query_glass];
};
