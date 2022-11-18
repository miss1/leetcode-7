/**
 * @param {number[]} nums
 * @return {number}
 * 三个哈希表，map记录nums中每个数字的数量，start记录每个数字的起始位置，end记录每个数字的结束位置
 * 遍历哈希表，记录数量最多的数字的跨度（end position - start position）
 * time: O(n)
 * space: O(n)
 */
var findShortestSubArray = function(nums) {
  let map = new Map();
  let start = new Map(), end = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else {
      map.set(nums[i], 1);
      start.set(nums[i], i);
    }
    end.set(nums[i], i);
  }
  let max = 0, length = 0;
  map.forEach((val, key) => {
    if (val > max) {
      max = val;
      length = end.get(key) - start.get(key) + 1;
    } else if (val === max) {
      length = Math.min(length, end.get(key) - start.get(key) + 1);
    }
  });
  return length;
};