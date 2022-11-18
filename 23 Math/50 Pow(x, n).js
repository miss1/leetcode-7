/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 跟29题类似
 * 为了减少计算次数，可以每次做乘法时，乘以自身。这样每次计算的个数乘以2，当个数i * 2 大于n时，做减法，重复上述乘法。直到 n等于0
 * time: O(logn)
 * space: O(1)
 */
var myPow = function(x, n) {
  let tag = false;
  if (n === 0) return 1;
  if (n < 0) {
    tag = true;
    n = -n;
  }
  let res = 1;
  while (n > 0) {
    let i = 1, r = x;
    while (i * 2 <= n) {
      r = r * r;
      i = i * 2;
    }
    res = res * r;
    n = n - i;
  }
  if (tag) res = 1 / res;
  return res;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * x^(2*n+1) = (x * x)^n * x
 * time: O(logn)
 * space: O(1)
 */
var myPow2 = function(x, n) {
  let tag = false;
  if (n === 0) return 1;
  if (n < 0) {
    tag = true;
    n = -n;
  }
  let res = 1, cur = x, i = n;
  while (i > 0) {
    if (i % 2 === 1) res = res * cur;
    cur = cur * cur;
    i = Math.floor(i / 2);
  }
  return tag ? 1 / res : res;
};
