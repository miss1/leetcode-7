/**
 * @param {number[]} nums
 * @return {number}
 * 前缀和，分别计算出左右两边的和
 * time: O(n)
 * space: O(1)
 */
var minimumAverageDifference = function(nums) {
  let sum = nums.reduce((total, val) => total + val);
  let leftSum = 0, rightSum = 0, mindiff = Infinity;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    rightSum = sum - leftSum;
    let leftAverage = Math.floor(leftSum / (i + 1));
    let rightAverage = i === nums.length - 1 ? 0 : Math.floor(rightSum / (nums.length - i - 1));
    let diff = Math.abs(leftAverage - rightAverage);
    if (diff < mindiff) {
      res = i;
      mindiff = diff;
    }
  }
  return res;
};