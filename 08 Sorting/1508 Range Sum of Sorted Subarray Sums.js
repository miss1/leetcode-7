/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 * brute force, 先遍历获取所有的sum，再排序
 * time: O(n²*logn)
 * space: O(n²)
 */
var rangeSum = function(nums, n, left, right) {
  const arr = [], mod = Math.pow(10, 9) + 7;
  // n*n
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      sum = sum % mod;
      arr.push(sum);
    }
  }

  // n²logn
  arr.sort((a, b) => a - b);

  let res = 0;
  for (let i = left - 1; i < right; i++) {
    res += arr[i];
    res = res % mod;
  }

  return res;
};