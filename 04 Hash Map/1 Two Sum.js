/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 哈希表, map存储数据，数值为key，下标为value
 * 遍历nums数组，计算出target和当前值的差值val，如果map中包含val，则返回当前下标和val的下标
 * 若map中不包含val，则将当前值和下标存入map
 * time: O(n)
 * space: O(n)
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    if (map.has(val)) return [map.get(val), i];
    else map.set(nums[i], i);
  }
  return [];
};