/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * time: O(m+n)
 * space: O(1)
 */
var merge = function(nums1, m, nums2, n) {
  let index1 = m - 1, index2 = n - 1;
  for (let i = m+n-1; i >= 0; i--) {
    if (index1 < 0) {
      nums1[i] = nums2[index2];
      index2--;
    } else if (index2 < 0) {
      break;
    } else if (nums2[index2] > nums1[index1]) {
      nums1[i] = nums2[index2];
      index2--;
    } else {
      nums1[i] = nums1[index1];
      index1--;
    }
  }
};

// 从两个数组的末尾开始比较，将较大的值放到num1的末尾
// [1,2,3,0,0,0]    [2,5,6]
// [1,2,3,0,0,6] -> [1,2,3,0,5,6] -> [1,2,3,3,5,6] -> [1,2,2,3,5,6]