/**
 * @param {number} n
 * @return {number}
 * Bottom-up
 * f(n) = f(n-1) + f(n-2) + f(n-3)
 * time: O(n)
 * space: O(1)
 */
var tribonacci = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  let a = 0, b = 1, c = 1;
  for (let i = 3; i <= n; i++) {
    let t = a + b + c;
    a = b;
    b = c;
    c = t;
  }
  return c;
};

/**
 * @param {number} n
 * @return {number}
 * Top-down, Recursion with Memoization
 */
var tribonacci2 = function(n) {
  let memo = new Map();
  const dp = function(i) {
    if (i === 0) return 0;
    if (i === 1 || i === 2) return 1;
    if (!memo.has(i)) memo.set(i, dp(i - 1) + dp(i - 2) + dp(i - 3));
    return memo.get(i);
  };
  return dp(n);
};
