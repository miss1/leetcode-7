/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 * 2D DP
 * dp[i][j]存储当s1中第i个字符结尾，s2中第j个字符结尾时，能否组成s3中的前i+j个字符
 * 对于dp[i][j]有四种情况
 * 1. s1[i] 和 s2[j] 都不等于最后一个字符s3[i+j-1], 则说明末尾字符无法匹配，不能组成s3，dp[i][j] = false
 * 2. s1[i] 和 s2[j] 都等于最后一个字符s3[i+j-1], 则只要dp[i-1][j]和 dp[i][j-1]中任意一个为true，就能生成s3
 * 3. 只有s1[i]等于最后一个字符s3[i+j-1]，则要看dp[i-1][j]
 * 4. 只有s2[j]等于最后一个字符s3[i+j-1]，则要看dp[i][j-1]
 * time: O(m*n)
 * space: O(m*n)
 */
var isInterleave = function(s1, s2, s3) {
  const m = s1.length, n = s2.length;
  if (s3.length !== m + n) return false;

  const dp = new Array(m + 1).fill('').map(val => new Array(n + 1).fill(''));
  dp[0][0] = true;

  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) dp[i][j] = s3[j - 1] === s2[j - 1] ? dp[i][j - 1] : false;
      else if (j === 0) dp[i][j] = s3[i - 1] === s1[i - 1] ? dp[i - 1][j] : false;
      else {
        const idx = i + j - 1;
        if (s3[idx] !== s1[i - 1] && s3[idx] !== s2[j - 1]) dp[i][j] = false;
        else if (s3[idx] === s1[i - 1] && s3[idx] === s2[j - 1]) dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
        else if (s3[idx] === s1[i - 1]) dp[i][j] = dp[i - 1][j];
        else dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[m][n];
};