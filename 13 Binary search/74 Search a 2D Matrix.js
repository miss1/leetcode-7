/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 二分，二维数组，先一层二分寻找到目标值在哪一行，在从该行中进行二分查找目标
 * time: O(logm+logn); m为外层数组长度，n为内层数组长度
 * space: O(1);
 */
var searchMatrix = function(matrix, target) {
  let top = 0, bottom = matrix.length - 1;
  while (top <= bottom) {
    let mid = top + ((bottom - top) >> 1);
    let col = matrix[mid];
    if (target < col[0]) bottom = mid - 1;
    else if (target > col[col.length - 1]) top = mid + 1;
    else {
      let left = 0, right = col.length - 1;
      while (left <= right) {
        let center = left + ((right - left) >> 1);
        if (col[center] === target) return true;
        if (target < col[center]) right = center - 1;
        else left = center + 1;
      }
      return false;
    }
  }
  return false;
};