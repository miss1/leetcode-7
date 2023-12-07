/**
 * @param {number[][]} mat
 * @return {number[]}
 * 计算二维数组每一行中1的个数
 * time: O(m*n)
 * space: O(1)
 */
var rowAndMaximumOnes = function(mat) {
  let res = [0, 0];
  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) count += 1;
    }
    if (res[1] < count) {
      res[0] = i;
      res[1] = count;
    }
  }
  return res;
};