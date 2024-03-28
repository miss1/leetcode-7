/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 长度不定的滑动窗口
 * 移动指针，记录窗口内每个数字的数量
 * time: O(n)
 * space: O(n)
 */
var maxSubarrayLength = function(nums, k) {
  let map = new Map();
  let i = 0, j = 0, res = 0;
  while (j < nums.length) {
    if (!map.has(nums[j]) || map.get(nums[j]) < k) {
      map.set(nums[j], (map.get(nums[j]) || 0) + 1);
      j++;
      continue;
    }
    res = Math.max(res, j - i);
    while (map.has(nums[j]) && map.get(nums[j]) === k) {
      if (map.get(nums[i]) === 1) map.delete(nums[i]);
      else map.set(nums[i], map.get(nums[i]) - 1);
      i++;
    }
  }
  return Math.max(res, j - i);
};
