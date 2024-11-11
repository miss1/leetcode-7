/**
 * @param {number[]} nums
 * @return {boolean}
 * 先用埃拉托斯特尼筛法，找出1000以内的所有prime number
 * 再将nums数组转为从1开始递增的数组
 * time: O(n+mloglog(m)) m = 1000
 * space: O(m)
 */
var primeSubOperation = function(nums) {
  const n = 1000;
  const arr = new Array(n + 1).fill(true);
  arr[1] = false;
  for (let i = 2; i <= n / i; i++) {
    if (arr[i]) {
      for (let j = 2; j <= n / i; j++) {
        arr[i * j] = false;
      }
    }
  }

  let currentVal = 1, i = 0;
  while (i < nums.length && currentVal <= nums[nums.length - 1]) {
    const p = nums[i] - currentVal;
    if (arr[p]) i += 1;
    currentVal += 1;
  }

  return i >= nums.length;
};