/**
 * @param {number[][]} mat
 * @return {number}
 * 求对角线的和，开始时，左右两个指针指向第一行的头和尾
 * 每往下移动一行，两个指针往中间移动一格
 * time: O(n)
 * space: O(1)
 */
var diagonalSum = function(mat) {
  let sum = 0, n = mat.length;
  let l = 0, r = n - 1;
  for (let i = 0; i < n; i++) {
    sum += mat[i][l] + mat[i][r];
    if (l === r) sum -= mat[i][l];
    l++;
    r--;
  }
  return sum;
};