/**
 * @param {number[]} nums
 * @return {number}
 * 遍历nums，记录负数的个数，最后如果负数个数是偶数返回1，是奇数返回-1
 * time: O(n)
 * space: O(1)
 */
var arraySign = function(nums) {
  let negativeCount = 0;
  for (let n of nums) {
    if (n === 0) return 0;
    if (n < 0) negativeCount++;
  }
  return negativeCount % 2 === 0 ? 1 : -1;
};