/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 先合并两个有序数组，再找出最中间的位置
 * time: O(m + n)
 * space: O(m + n)
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let all = [];
  let i = 0, j = 0;
  // 合并两个有序数组
  while (i < nums1.length || j < nums2.length) {
    if (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        all.push(nums1[i]);
        i++;
      } else {
        all.push(nums2[j]);
        j++;
      }
    } else if (i < nums1.length) {
      all.push(nums1[i]);
      i++;
    } else {
      all.push(nums2[j]);
      j++;
    }
  }
  // 求中间值
  let length = nums1.length + nums2.length;
  let mid = Math.floor(length / 2);
  if (length % 2 === 0) return (all[mid] + all[mid - 1]) / 2;
  else return all[mid];
};