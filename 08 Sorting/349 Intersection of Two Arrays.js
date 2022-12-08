/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 先排序，在遍历两个数组，比较大小。
 * time: O(nlogn)
 * space: O(n)
 */
var intersection = function(nums1, nums2) {
  nums1.sort((a,b) => a - b);
  nums2.sort((a,b) => a - b);
  let i = 0, j = 0, set = new Set();
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) j++;
    else if (nums1[i] < nums2[j]) i++;
    else {
      set.add(nums1[i]);
      i++;
      j++;
    }
  }
  return [...set];
};