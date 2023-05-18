/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 * 双指针分别指向两个数组，比较id大小
 * time: O(n)
 * space: O(n)
 */
var mergeArrays = function(nums1, nums2) {
  let map = new Map();
  let i = 0, j = 0;
  while (i < nums1.length || j < nums2.length) {
    let id1 = i < nums1.length ? nums1[i][0] : Infinity;
    let id2 = j < nums2.length ? nums2[j][0] : Infinity;
    let id = Math.min(id1, id2);
    let value = id1 > id2 ? nums2[j][1] : nums1[i][1];
    map.set(id, map.has(id) ? map.get(id) + value : value);
    if (id1 > id2) j++;
    else i++;
  }
  return Array.from(map);
};