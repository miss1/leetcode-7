/**
 * @param {string} s
 * @return {number}
 * dp, memorization
 * 从s最后一个字符i开始遍历，dp[i]存储从i到最后一个字符这段子串，最少包含多少个回文串
 * 以i为起点逐个遍历将s[i:end]分成两部分s[i:j]和s[j+1:end], 如果s[i:j]是回文，则dp[i] = Math.min(dp[i], 1 + dp[j + 1]);
 * time: O(n*n*n)  // 会超时，可以优化回文判断的函数
 * space: O(n)
 */
var minCut = function(s) {
  const set = new Set();

  // 判断是否是回文，O(n)
  const isPalindrome = (i, j) => {
    const str = s.slice(i, j+1);
    if (set.has(str)) return true;
    while (i < j) {
      if (s[i++] !== s[j--]) return false;
    }
    set.add(str);
    return true;
  };

  // dp
  const n = s.length, dp = new Array(n).fill(Infinity);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (isPalindrome(i, j)) {
        dp[i] = Math.min(dp[i], 1 + (j === n - 1 ? 0 : dp[j + 1]));
      }
    }
  }

  return dp[0] - 1;
};

/**
 * @param {string} s
 * @return {number}
 * 跟上面一样的解法，只是优化了判断回文的方法
 * 用一个二维数组p, p[i][j]记录s中从i到j这一段是否是回文，每次判断时，如果s[i]===s[j] 并且 p[i+1][j-1]=true, 则说明p[p][j]=true
 * time: O(n*n)
 * space: O(n*n)
 */
var minCut2 = function(s) {
  const n = s.length;
  const p = new Array(n).fill(false).map(val => new Array(n).fill(false));

  // 判断回文，memorization， O(1)
  const isPalindrome = (i, j) => {
    if (s[i] !== s[j]) return false;
    if (i === j || i + 1 === j ||  p[i + 1][j - 1]) {
      p[i][j] = true;
      return true;
    }
    return false;
  };

  const dp = new Array(n).fill(Infinity);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (isPalindrome(i, j)) {
        dp[i] = Math.min(dp[i], 1 + (j === n - 1 ? 0 : dp[j + 1]));
      }
    }
  }

  return dp[0] - 1;
};