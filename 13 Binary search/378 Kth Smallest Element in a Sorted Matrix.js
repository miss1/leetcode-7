/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 * 二位矩阵的二分,从最小值 start = matrix[0][0], 最大值 end = matrix[n - 1][n - 1]开始。
 * 取start跟end的中间值mid，再求出矩阵中不大于mid的个数count, 比较count和k的大小，再挪动start和end
 * time: O(nlog(end - start))
 * space: O(1)
 */
var kthSmallest = function(matrix, k) {
  let n = matrix.length;

  const noGreaterCount = function(mid) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (matrix[i][n - 1] <= mid) {
        count += n;
      } else {
        for (let j = n - 1; j >= 0; j--) {
          if (matrix[i][j] <= mid) count++;
        }
      }
    }
    return count;
  };

  let start = matrix[0][0], end = matrix[n - 1][n - 1];
  while (start < end) {
    let mid = start + ((end - start) >> 1);
    let count = noGreaterCount(mid);
    if (count < k) start = mid + 1;
    else end = mid;
  }
  return start;
};
