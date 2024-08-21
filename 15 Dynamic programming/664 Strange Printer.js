/**
 * @param {string} s
 * @return {number}
 * dp, bottom-up
 * 二维dp记录s[i]~s[j]之间的子串，需要的最小次数。最后返回dp[0][n-1]即可
 * 遍历，子串的长度从0开始遍历，当子串长度为i时，遍历所有长度为i的子串，获取该子串的答案
 * 对于每一个子串s[l] ~ s[r], 用一个下标x，将它分成两半，则dp[l][r] = dp[l][x] + dp[x+1][r]
 * 注意当x将它分成两半时，如果两边的字符串最后一个字符相等，则所需要的次数可以-1
 * time: O(n*n*n)
 * space: O(n*n)
 */
var strangePrinter = function(s) {
  const n = s.length;
  const dp = new Array(n).fill(Infinity).map(val => new Array(n).fill(Infinity));

  // i: 子串的长度
  for (let i = 0; i < n; i++) {
    let l = 0, r = l + i;
    // 遍历所有长度为i的子串
    while (r < n) {
      if (l + 1 > r - 1) dp[l][r] = s[l] === s[r] ? 1 : 2; // 长度为1 or 2
      else {
        // 分成两半，获取结果
        for (let x = 0; x < r; x++) {
          let totle = dp[l][x] + dp[x + 1][r];
          if (s[x] === s[r]) totle -= 1;
          dp[l][r] = Math.min(dp[l][r], totle);
        }
      }
      l++;
      r++;
    }
  }

  return dp[0][n-1]
};