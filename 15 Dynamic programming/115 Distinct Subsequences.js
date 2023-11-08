/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 2D dp, dp[i][j]存储当t以t[i]结尾，s以s[j]结尾时的subsequences数量
 * dp的第一行默认值为1，第一列默认值为0
 * 可知当t以t[i]结尾，s以s[j]结尾时，当t[i]===s[j] => dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
 * t[i]!==s[j] => dp[i][j] = dp[i][j - 1]
 * time: O(m*n)
 * space: O(m*n)
 */
var numDistinct = function(s, t) {
    let m = t.length, n = s.length;
    let dp = new Array(m + 1).fill(0).map(val => new Array(n + 1).fill(0));
    for (let j = 0; j <= n; j++) {
        dp[0][j] = 1;
    }
    for (let i = 0; i < m; i++) {
        for (let j = i; j < n; j++) {
            if (t[i] === s[j]) {
                dp[i + 1][j + 1] = dp[i][j] + dp[i + 1][j];
            } else {
                dp[i + 1][j + 1] = dp[i + 1][j];
            }
        }
    }
    return dp[m][n];
};
