/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 动态规划，假设在s前面插入一个字符一定为true，dp存储第i个字符结尾时的字符串是否为true
 * 遍历s，当前为i时，从0开始到i遍历j。当dp[j]为true时，如果j到i(不包括i)这一段字符串存在于wordDict中，则dp[i]为true
 * time: O(n*n*n)
 * space: O(n)
 */
var wordBreak = function(s, wordDict) {
  let words = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && words.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * BFS
 * s中每个index为一个node，如果i到j之间的字符存在于wordDict中，说明i到j存在一条边
 * eg: s = "leetcode", wordDict = ["leet","code"], 则 0-3相连，4-7相连
 * BFS求从0出发，能否到达7 -> [0] -> [4] -> [8] (到达下一个点j之后，下一个起点是j+1)
 * time: O(n*n*n) n: s.length, m: wordDict.length, k: wordDict[i].length
 */
var wordBreak2 = function(s, wordDict) {
  let set = new Set(wordDict);  // time: O(m), space: O(m*k)
  let target = s.length;
  let queue = [0], visited = new Set();  // time: O(n*n*n) space: O(n)
  while (queue.length > 0) {
    let nextLevel = [];
    for (let n of queue) {
      let w = '';
      for (let i = n; i < target; i++) {
        w += s[i];
        if (visited.has(i) || !set.has(w)) continue;
        if (i === target - 1) return true;
        visited.add(i)
        nextLevel.push(i + 1);
      }
    }
    queue = nextLevel;
  }
  return false;
};
