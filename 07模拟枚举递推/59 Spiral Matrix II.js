/**
 * @param {number} n
 * @return {number[][]}
 * 跟54提一样，循环，走一圈为一个循环，每走完一条边收缩该条边的边界
 * time: O(n²)
 * space: O(1)
 */
var generateMatrix = function(n) {
  let res = new Array(n).fill(0).map(val => new Array(n).fill(0));
  let top = 0, bottom = n - 1;
  let left = 0, right = n - 1;
  let count = 1;
  while (true) {
    for (let i = left; i <= right; i++) {
      res[top][i] = count;
      count += 1;
    }
    top++;
    if (top > bottom || left > right) break;
    for (let i = top; i <= bottom; i++) {
      res[i][right] = count;
      count++;
    }
    right--;
    if (top > bottom || left > right) break;
    for (let i = right; i >= left; i--) {
      res[bottom][i] = count;
      count++;
    }
    bottom--;
    if (top > bottom || left > right) break;
    for (let i = bottom; i >= top; i--) {
      res[i][left] = count;
      count++;
    }
    left++;
    if (top > bottom || left > right) break;
  }
  return res;
};
