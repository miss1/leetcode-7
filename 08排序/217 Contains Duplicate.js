/**
 * @param {number[]} nums
 * @return {boolean}
 * 判断是否是有重复的数字，直接用set去重，判断去重后的长度是否相等
 * time: O(n)
 * space: O(n)
 */
var containsDuplicate = function(nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * 先排序，再遍历判断相邻的值是否相等
 * time: O(nlogn)
 * space: O(1)
 */
var containsDuplicate2 = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};
