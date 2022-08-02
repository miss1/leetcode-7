/**
 * @param {number} n - a positive integer
 * @return {number}
 * 计算1的个数。设置一个mask从1开始，如果n&mask === mask，说明该位置上存在1，然后mask左移继续判断该位置上有没有1
 * time: O(1)
 * space: O(1)
 */
var hammingWeight = function(n) {
  let count = 0, mask = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & mask) === mask) count++;
    mask = mask << 1;
  }
  return count;
};