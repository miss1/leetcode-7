/**
 * @param {number[]} nums
 * @return {number}
 * 排序，然后头尾分别相加
 * time: O(nlogn)
 * space: O(logn)
 */
var minimumAverage = function(nums) {
  nums.sort((a, b) => a - b);
  const t = nums.length / 2;
  let i = 0, j = nums.length - 1;
  let res = Infinity;
  for (let x = 0; i < t; x++) {
    res = Math.min(res, ((nums[i] + nums[j]) / 2));
    i++;
    j--;
  }
  return res;
};