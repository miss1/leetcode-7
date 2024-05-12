/**
 * @param {number[][]} grid
 * @return {number[][]}
 * 遍历，i,j作为起点，然后计算以i,j为起点的九宫格中的最大值
 * time: O(n * n)
 * space: O(1)
 */
var largestLocal = function(grid) {
  const n = grid.length;
  let res = new Array(n - 2).fill(0).map(val => new Array(n - 2).fill(0));

  const findMax = function(x, y) {
    let m = 0;
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        m = Math.max(m, grid[i][j]);
      }
    }
    return m;
  }

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      res[i][j] = findMax(i, j);
    }
  }

  return res;
};
