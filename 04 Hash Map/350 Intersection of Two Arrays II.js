/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 哈希表存储num1中每个数的个数，再遍历nums2，得到相交的值
 * time: O(n)
 * space: O(n)
 */
var intersect = function(nums1, nums2) {
  let map = new Map();
  let res = [];
  for (let num of nums1) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }
  for (let num of nums2) {
    if (map.has(num)) {
      res.push(num);
      if (map.get(num) > 1) map.set(num, map.get(num) - 1);
      else map.delete(num);
    }
  }
  return res;
};