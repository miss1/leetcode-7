/**
 * @param {number[]} nums
 * @return {string[]}
 * 遍历拆解
 * time: O(n)
 * space: O(1)
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) return [];
  const res = [];
  let start = nums[0], i = 1;
  while (i < nums.length) {
    if (nums[i] !== nums[i - 1] + 1) {
      const r = nums[i - 1] === start ? start + '' : start + '->' + nums[i - 1];
      res.push(r);
      start = nums[i];
    }
    i++;
  }
  const t = nums[i - 1] === start ? start + '' : start + '->' + nums[i - 1];
  res.push(t);
  return res;
};