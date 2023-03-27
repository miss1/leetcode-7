/**
 * @param {number[]} nums
 * @return {number}
 * 遍历nums，记录当子串以当前位置结尾时，最大乘积和最小乘积
 * 子串是连续的，以当前字符结尾，说明该子串一定包含当前字符和前一个字符
 * 求当前字符的最大(小)值，可以根据它前一个字符的最大(小)值来计算
 * max = Math.max(nums[i], max * nums[i], min * nums[i]);
 * min = Math.min(nums[i], max * nums[i], min * nums[i]);
 * time: O(n)
 * space: O(1)
 */
var maxProduct = function(nums) {
  let res = nums[0], max = nums[0], min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let tmpMax = Math.max(nums[i], max * nums[i], min * nums[i]);
    min = Math.min(nums[i], max * nums[i], min * nums[i]);
    max = tmpMax;
    res = Math.max(res, max);
  }
  return res;
};