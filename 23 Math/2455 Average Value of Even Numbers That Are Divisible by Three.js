/**
 * @param {number[]} nums
 * @return {number}
 * time: O(n)
 * space: O(1)
 */
var averageValue = function(nums) {
  let sum = 0, count = 0;
  for (let n of nums) {
    if (n % 2 === 0 && n % 3 === 0) {
      sum += n;
      count++;
    }
  }
  return count === 0 ? 0 : Math.floor(sum / count);
};