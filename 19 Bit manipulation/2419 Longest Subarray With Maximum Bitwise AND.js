/**
 * @param {number[]} nums
 * @return {number}
 * hint: Notice that the bitwise AND of two different numbers will always be strictly less than the maximum of those two numbers.
 * 要求nums中的最大值，多个最大值连续在一起，最大的长度
 * eg: [3,3,3,2,3,3], 最大值为3，最长的连续有3个3在一起，return 3
 * time: O(n)
 * space: O(1)
 */
var longestSubarray = function(nums) {
  let res = 0;
  let i = 0, j = 0, m = 0;
  while (j < nums.length) {
    if (nums[i] === nums[j]) j++;
    else {
      if (nums[i] >= m) {
        res = nums[i] > m ? j - i : Math.max(j - i, res);
        m = nums[i];
      }
      i = j;
    }
  }
  if (nums[i] >= m) res = nums[i] > m ? j - i : Math.max(j - i, res);
  return res;
};