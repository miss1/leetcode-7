/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * dp[i][j] = dp[i+1][j+1] + 1
 * 以i, j为结尾的子串，如果nums1[i] == nums2[j]，dp[i][j] = 1 + 以前一个字符结尾时的结果
 * 新建一个二维数组arr，存储，当nums1中(0, i)以i下标结尾的子串，nums2中以j下标结尾的子串，他们的Maximum Length of Repeated Subarray
 * 则 当nums1[i] == nums2[j]时，arr[i][j] = arr[i - 1][j - 1] + 1
 * eg.nums1 = [1,2,3,2,1] nums2 = [3,2,1,4,7]
 *    3  2  1  4  7
 * 1  0  0  1  0  0
 * 2  0  1  0  0  0
 * 3  1  0  0  0  0
 * 2  0  2  0  0  0
 * 1  0  0  3  0  0
 * so the Maximum Length of Repeated Subarray is 3
 * time: O(mn)
 * space: O(mn)
 */
var findLength = function(nums1, nums2) {
  // 注意，新建二维数组，不能用new Array(nums1.length).fill(new Array(nums2.length).fill(0));
  // 这样里层的所有数组会指向同一个引用， 导致更新一个数时会同时更新其他的数
  let arr = new Array(nums1.length).fill(0).map(() => new Array(nums2.length).fill(0));
  let res = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        arr[i][j] = i > 0 && j > 0 ? arr[i - 1][j - 1] + 1 : 1;
        res = Math.max(res, arr[i][j]);
      }
    }
  }
  return res;
};