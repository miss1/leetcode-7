/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 穷举法，记录从1到n中满足条件的数，返回第k个
 * time: O(n)
 * space: O(1)
 */
var kthFactor = function(n, k) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) k--;
    if (k === 0) return i;
  }
  return -1;
};


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 跟判断这个数是否是质数的方法相同，判断从 2 ~ Math.sqrt(n) 中有多少数字能被n整除
 * time: O(sqrt n)
 * space: O(1)
 */
var kthFactor2 = function(n, k) {
  let factors1 = [], factors2 = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors1.push(i);
      if (n / i !== i) factors2.push(n / i);
    }
  }
  while (factors2.length > 0) {
    factors1.push(factors2.pop());
  }
  return factors1.length < k ? -1 :  factors1[k - 1];
};