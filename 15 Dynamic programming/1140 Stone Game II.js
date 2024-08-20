/**
 * @param {number[]} piles
 * @return {number}
 * dfs+Memoization -> DP
 * dfs求当前user(A or B), 从piles[0]为起点，给定M时，A能得到的最大分数。将已经得到的值存储到dp中避免重复计算
 * time: O(n*n*n)
 * space: O(n*n)
 */
var stoneGameII = function(piles) {
  const n = piles.length;

  let dp = [];
  for (let i = 0; i < 2; i++) {
    const arr = new Array(n+1).fill(-1).map(val => new Array(n+1).fill(-1));
    dp.push(arr);
  }

  // user P, 以piles[idx]为起点，M=m时，A能得到的最多分数
  const dfs = (p, idx, m) => {
    if (idx >= n) return 0;
    if (dp[p][idx][m] !== -1) return dp[p][idx][m];

    let s = 0;
    let total = p === 0 ? -1 : Infinity;

    for (let x = 1; x <= 2 * m; x++) { // 尝试每一个可能性
      if (idx + x - 1 >= n) {
        dp[p][idx][m] = total;
        return total;
      }

      s += piles[idx + x - 1];
      if (p === 0) total = Math.max(total, s + dfs(1, idx + x, Math.max(m, x))); // 当前是A操作，加上当前分数，保证之后的轮数A的分最大
      else total = Math.min(total, dfs(0, idx + x, Math.max(m, x))); // 当前B操作，要让之后A能得到的分最小
    }

    dp[p][idx][m] = total; // Memoization
    return total;
  };

  return dfs(0 ,0, 1); // Alice, start withe piles[0], M=1
};