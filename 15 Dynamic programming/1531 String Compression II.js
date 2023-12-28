/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * DP, bottom-up
 * 二维dp， dp[i][j]存储以s[i]为起点到s结束这一段，最多删除j个字符，所得的最小值
 * 对于每一个起点s[i]，有两种情况
 * > 删除当前起点s[i]，则dp[i][j] = dp[i + 1][j - 1], (删除当前字符，说明下一个字符为起点时需要少删除一个字符)
 * > 保留当前起点s[i]，这时需要计算从i到s结束，在最多删除j个字符的情况下，最多有多少连续的s[i]。dp[i][j] = dp[end + 1][del] + size
 * time: O(n*k*n)
 * space: O(n*k)
 */
var getLengthOfOptimalCompression = function(s, k) {
  const n = s.length;
  let dp = new Array(n + 1).fill(0).map(val => new Array(k + 1).fill(Infinity));
  for (let i = n; i >= 0; i--) {
    for (let j = 0; j <= k; j++) {
      if (i === n) {
        dp[i][j] = 0;
        continue;
      }
      if (j > 0) dp[i][j] = Math.min(dp[i][j], dp[i + 1][j - 1])
      let count = 0, del = j, end = i;
      while (end < n && del >= 0) {
        // 计算从i到s结束，在最多删除j个字符的情况下，最多有多少连续的s[i]
        if (s[end] === s[i]) {
          count++;

          // 转换并获取长度，eg：sss -> s3 -> 2
          let size = 0;
          if (count === 1) size = 1;
          else size = String(count).length + 1;

          // 假设当前为连续字符的终点
          dp[i][j] = Math.min(dp[i][j], dp[end + 1][del] + size);
        } else {
          del--;  //遇到有不相等的，删除，保证连续字符相等
        }
        end++;
      }
    }
  }
  return dp[0][k];
};
