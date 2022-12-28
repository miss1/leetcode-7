/**
 * @param {number[]} nums
 * @return {number}
 * 前缀和，遍历nums，求出每一项的前缀和，记录下最小值。只要保证前缀和的最小值不小于1就行
 * time: O(n)
 * space: O(1)
 */
var minStartValue = function(nums) {
  let min = Infinity, prefixSum = 0;
  for (let n of nums) {
    prefixSum += n;
    min = Math.min(min, prefixSum);
  }
  return min > 0 ? 1 : 1 - min;
};