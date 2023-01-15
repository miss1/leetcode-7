/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 * 模拟。add 1 to mat[x][y] for for all row1i <= x <= row2i and col1i <= y <= col2i.
 * time: O(n² * m) m为queries的长度
 * space: O(n²)
 */
var rangeAddQueries = function(n, queries) {
  let mat = new Array(n).fill(0).map(val => new Array(n).fill(0));
  for (let querie of queries) {
    for (let x = querie[0]; x <= querie[2]; x++) {
      for (let y = querie[1]; y <= querie[3]; y++) {
        mat[x][y] += 1;
      }
    }
  }
  return mat;
};