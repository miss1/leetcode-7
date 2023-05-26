/**
 * @param {number[]} gain
 * @return {number}
 * 求gain的前缀和中的最大值
 * time: O(n)
 * space: O(1)
 */
var largestAltitude = function(gain) {
  let sum = 0, max = 0;
  for (let g of gain) {
    sum += g;
    max = Math.max(max, sum);
  }
  return max;
};