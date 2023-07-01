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

/**
 * @param {number[]} nums
 * @return {number}
 * 用一个数组记录以当前num结尾时，能得到的最大和
 * f(n + 1) = Math.max(f(n) + num, num);
 * 上面的方法是一样的，只是优化了空间复杂度
 * time: O(n)
 * space: O(n)
 */
  // -2 1 -3 4 -1 2 1 -5 4
  // -2 1 -2 4 3  5 6 1  5
var maxSubArray2 = function(nums) {
  const len = nums.length;
  let memo = new Array(len + 1).fill(0), res = -Infinity;
  for (let i = 0; i < len; i++) {
    memo[i + 1] = Math.max(memo[i] + nums[i], nums[i]);
    res = Math.max(res, memo[i + 1]);
  }
  return res;
};