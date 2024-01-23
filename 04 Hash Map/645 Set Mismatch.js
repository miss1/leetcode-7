/**
 * @param {number[]} nums
 * @return {number[]}
 * 先求1-n的和，再求nums中的和，并且找到nums中重复的值，两个和相减即可
 * time: O(n)
 * space: O(n)
 */
var findErrorNums = function(nums) {
  const n = nums.length;
  let total = (n * (n + 1)) / 2;
  let set = new Set(), sum = 0, res = [];
  for (let num of nums) {
    if (set.has(num)) res.push(num);
    sum += num;
    set.add(num);
  }
  res.push(total - sum + res[0]);
  return res;
};
