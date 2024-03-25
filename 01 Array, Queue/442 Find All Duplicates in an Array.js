/**
 * @param {number[]} nums
 * @return {number[]}
 * 每个树最多出现两次，所以遍历nums，n = nums[i]
 * 将nums[n - 1]的值改为负数作为标记，记录n已经遇到过了
 * time: O(n)
 * space: O(1)
 */
var findDuplicates = function(nums) {
  let res = [];
  for (let n of nums) {
    if (nums[Math.abs(n) - 1] > 0) nums[Math.abs(n) - 1] *= -1;
    else res.push(Math.abs(n));
  }
  return res;
};
