/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 循环，走一圈为一个循环，每走完一条边收缩该条边的边界
 * time: O(m*n)
 * space: O(m*n)
 */
var spiralOrder = function(matrix) {
  let res = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  while (true) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    top++;
    if (top > bottom || left > right) break;

    for(let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;
    if (top > bottom || left > right) break;

    for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
    bottom--;
    if (top > bottom || left > right) break;

    for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
    left++;
    if (top > bottom || left > right) break;
  }
  return res;
};
