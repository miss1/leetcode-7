/**
 * @param {number[][]} grid
 * @return {number}
 * 二维矩阵的BFS。先遍历找到所有的2，同时计算1的个数
 * 每一步将所有的2向四个方向扩张，将1变成2。
 * 最后返回步数即可。如果最后1的个数大于0，说明不能将所有1变成2，返回-1
 * time: O(m*n)
 * space: O(m*n)
 */
var orangesRotting = function(grid) {
  let m = grid.length, n = grid[0].length;
  let current = [], total = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) current.push([i, j]);
      if (grid[i][j] === 1) total++;
    }
  }
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let res = 0;
  while (current.length > 0) {
    let next = [];
    for (let g of current) {
      for (let d of directions) {
        let x = g[0] + d[0], y = g[1] + d[1];
        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
          next.push([x, y]);
          grid[x][y] = 2;
          total--;
        }
      }
    }
    current = next;
    if (current.length > 0) res++;
  }
  if (total > 0) return -1;
  return res;
};