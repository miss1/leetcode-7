/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 * set去重并去除交集
 * time: O(n)
 * space: O(n)
 */
var findDifference = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  for (let item of set1) {
    if (set2.has(item)) {
      set1.delete(item);
      set2.delete(item);
    }
  }
  return [[...set1], [...set2]];
};