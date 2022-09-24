/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 全排列，返回第k个排列。回溯排列，返回第k个结果
 * time: O(n * n!)
 * space: O(n!)
 */
var getPermutation = function(n, k) {
  let res = [], num = 0;
  const backTrack = function() {
    if (res.length >= n) {
      num++;
      if (num === k) return res.join('');
      return '';
    }
    for (let i = 1; i <= n; i++) {
      if (!res.includes(i)) {
        res.push(i);
        let r = backTrack();
        if (r) return r;
        res.pop();
      }
    }
  }
  return backTrack();
};

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 利用阶乘(factorial)
 * Algorithm:
 * Generate input array nums of numbers from 1 to N.
 * Compute all factorial bases from 0 to (N - 1)!.
 * Decrease k by 1 to make it fit into (0, N! - 1) interval.
 * Compute factorial representation of k. Use factorial coefficients to construct the permutation.
 * Return the permutation string.
 * time: O(n²)
 * space: O(n)
 */
var getPermutation2 = function(n, k) {
  let factorial = [1];
  for (let i = 1 ;i < n; i++) factorial[i] = i * factorial[i - 1];
  let nums = Array.from({ length: n },(v,i) => i + 1);
  let res = "";
  for (let i = n; i > 0; i--) {
    let index = Math.ceil(k / factorial[i - 1]);
    res += nums[index - 1];
    nums.splice(index - 1,1);
    k -= (factorial[i - 1] * (index - 1));
  }
  return res
};