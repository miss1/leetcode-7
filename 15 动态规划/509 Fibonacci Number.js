/**
 * @param {number} n
 * @return {number}
 * f(n) = f(n-1) + f(n-2)
 * time: O(n)
 * space: O(1)
 */
var fib = function(n) {
  if (n < 2) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let t = b;
    b = a + b;
    a = t;
  }
  return b;
};
