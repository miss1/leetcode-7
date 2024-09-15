/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 * Trie + DP
 * 先用words建立一个Trie，用于查找prefix
 * dp[i]记录以target[i]为起点时，最少需要多少个prefix
 * 对越每一个i，j从i开始遍历直到末尾。如果i~j这一段是存在于Trie中，则dp[i] = dp[j] + 1
 * time: O(n*n)
 * space: O(m*n)
 */
var minValidStrings = function(words, target) {
  // Trie: O(m*n), words.length * word.length
  const t = {};
  for (let word of words) {
    let node = t;
    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
  }

  //dp O(n*n) target.length
  const n = target.length;
  const dp = new Array(n).fill(-1);

  for (let i = n - 1; i >= 0; i--) {
    let node = t;
    if (!node[target[i]]) continue;

    let c = Infinity;
    for (let j = i; j < n; j++) {
      if (!node[target[j]]) break;
      if (j === n - 1 || dp[j + 1] !== -1) c = Math.min(c, (dp[j + 1] || 0) + 1);
      node = node[target[j]];
    }

    dp[i] = c === Infinity ? -1 : c;
  }

  return dp[0];
};