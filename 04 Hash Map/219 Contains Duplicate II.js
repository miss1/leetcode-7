/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 遍历nums，用哈希表存储每个数，对于每个数，从哈希表中查找当前的数，如果存在，说明找到了相等的数，返回true
 * 哈希表的长度保持为k，当超过k时，删除最先加入的数
 * time: O(n)
 * space: O(min(n,k))
 */
var containsNearbyDuplicate = function(nums, k) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (set.size > k) set.delete(nums[i - k]);
  }
  return false;
};