/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 * DP + Binary Search
 * 先将jobs按startTime排序
 * 从后开始遍历，dp[i]存储当startTime[i]为开始时间时的最大收益
 * 当开始时间为startTime[i]，即jobs[i]为第一个job时，有两种情况
 * > 执行当前job, 则下一个开始时间为endTime[i], 则需要找到第一个大于等于该endTime[i]的startTime j, 用Binary Search从startTime中查找
 * 则dp[i] = profit[i] + dp[j]
 * > 不执行当前job，dp[i] = dp[i + 1]
 * time: O(nlogn)
 * space: O(n)
 */
var jobScheduling = function(startTime, endTime, profit) {
  // sort with start time O(nlogn)
  const n = startTime.length;
  let jobs = [];
  for (let i = 0; i < n; i++) {
    jobs.push([startTime[i], endTime[i], profit[i]]);
  }
  jobs.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  // dp O(nlogn)
  let dp = new Array(n).fill(0);
  dp[n - 1] = jobs[n - 1][2];
  for (let i = n - 2; i >= 0; i--) {
    let end = jobs[i][1];
    // Binary Search O(logn)
    let l = 0, r = n;
    while (l < r) {
      let mid = l + ((r - l) >> 1);
      if (jobs[mid][0] >= end) r = mid;
      else l = mid + 1;
    }
    if (l < n) dp[i] = Math.max(dp[i + 1], jobs[i][2] + dp[l]);
    else dp[i] = Math.max(dp[i + 1], jobs[i][2]);
  }

  return dp[0];
};
