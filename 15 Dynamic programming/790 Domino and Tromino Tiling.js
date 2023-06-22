/**
 * @param {number} n
 * @return {number}
 * f(n) = 2 * f(n - 1) + f(n - 3), why?? no idea
 * time: O(n)
 * space: O(n)
 */
var numTilings = function(n) {
  const mod = Math.pow(10, 9) + 7;
  let memo = new Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 5;
  for (let i = 4; i <= n; i++) {
    memo[i] = (2 * memo[i - 1] + memo[i - 3]) % mod;
  }
  return memo[n];
};