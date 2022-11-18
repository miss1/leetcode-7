/**
 * @param {number} n
 * @return {number}
 * 爬楼梯问题，到第n阶的方法等于到n-1阶和到n-2阶方法的和
 * f(n) = f(n-1) + f(n-2)
 * time: O(n)
 * space: O(1)
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let a = 1, b = 2;
  let res = 0;
  for (let i = 2; i < n; i++) {
    res = a + b;
    a = b;
    b = res;
  }
  return res;
};