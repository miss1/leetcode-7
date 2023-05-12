/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 动态规划
 * 用一个二维数组memo，memo[i][j]记录当nums1长度为i，nums2长度为j时，能得到的最大结果
 * (画一个二维表格，nums1在最左边一列，nums2在最上面一行，计算出中间对应的每一格应该是什么值)
 * 如果nums1[i]等于nums2[j], f(i, j) = f(i-1, j-1) + 1
 * 如果不相等，则f(i, j) = Math.max(f(i-1, j), f(i, j-1))
 * time: O(m*n)
 * space: O(m*n)
 */
var maxUncrossedLines = function(nums1, nums2) {
  let n1 = nums1.length, n2 = nums2.length;
  let memo = new Array(n1 + 1).fill(0).map(val => new Array(n2 + 1).fill(0));
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1] + 1;
      } else {
        memo[i][j] = Math.max(memo[i][j - 1], memo[i - 1][j]);
      }
    }
  }
  return memo[n1][n2];
};