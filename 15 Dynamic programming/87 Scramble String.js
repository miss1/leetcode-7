/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * dp[len][i][j] 存储，s1中以i为起点长度为len的子串，s2中以j为起点长度为len的子串，两个子串是否是Scramble String
 * 判断两个子串str1和str2是否是Scramble String，将子串切割成两部分，左半边的长度可以在0~len之间，逐个计算两部分是否是Scramble String
 * time: O(n*n*n*n)
 * space: O(n*n*n)
 */
var isScramble = function(s1, s2) {
  const n = s1.length;
  const dp = new Array(n+1).fill(false).map(val => new Array(n).fill(false).map(val => new Array(n).fill(false)));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[1][i][j] = s1[i] === s2[j];
    }
  }

  for (let len = 2; len < n + 1; len++) {
    for (let i = 0; i <= n - len; i++) {
      for (let j = 0; j <= n - len; j++) {
        for (let len2 = 1; len2 < len; len2++) {
          const p1 = dp[len2][i][j] && dp[len - len2][i + len2][j + len2];  // i~len这部分string，分成两部分 i~len2, len2+i ~ len
          const p2 = dp[len2][i][j + len - len2] && dp[len - len2][i+len2][j];
          dp[len][i][j] = dp[len][i][j] || p1 || p2;
        }
      }
    }
  }

  return dp[n][0][0];
};