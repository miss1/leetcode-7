/**
 * @param {number[]} nums
 * @return {number}
 * 贪心，要得到最大的和，西药每次都取到比较大的值，只需要将数组排序，然后从头开始两两组合，取组合中的最小值相加
 * time: O(nlogn)
 * space: O(logn)
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < nums.length; i += 2) {
    res += nums[i];
  }
  return res;
};