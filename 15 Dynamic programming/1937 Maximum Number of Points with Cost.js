/**
 * @param {number[][]} points
 * @return {number}
 * lc1014 + lc931的结合
 * time: O(m*n)
 * space: O(n)
 */
var maxPoints = function(points) {
  const m = points.length, n = points[0].length;

  let dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = points[0][i];
  }

  for (let i = 1; i < m; i++) {
    const leftMax = new Array(n).fill(0), rightMax = new Array(n).fill(0);
    const newDP = new Array(n).fill(0);

    leftMax[0] = dp[0];
    for (let t = 1; t < n; t++) {
      leftMax[t] = Math.max(leftMax[t - 1], dp[t] + t);
    }

    rightMax[n - 1] = dp[n - 1] - (n - 1)
    for (let t = n - 2; t >= 0; t--) {
      rightMax[t] = Math.max(rightMax[t + 1], dp[t] - t);
    }

    for (let x = 0; x < n; x++) {
      newDP[x] = Math.max(leftMax[x] - x, rightMax[x] + x) + points[i][x];
    }

    dp = newDP;
  }

  return Math.max(...dp);
};