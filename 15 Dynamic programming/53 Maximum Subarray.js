/**
 * @param {number[]} nums
 * @return {number}
 * 求和最大的连续子串。解有两种情况，一种是不包含最后一个字符，和用preMax表示。一种是包含最后一个字符的子串，用maxEndingHere表示
 * 长度为n的字符，解为，n-1中的解即preMax跟n的maxEndingHere，两个中取更大的数
 * n的maxEndingHere的值会等于n-1的maxEndingHere + nums[n],或者nums[n].两个取更大值
 * time: O(n)
 * space: O(1)
 */
var maxSubArray = function(nums) {
  let preMax = nums[0], maxEndingHere = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    res = Math.max(preMax, maxEndingHere);
    preMax = res;
  }
  return res;
};