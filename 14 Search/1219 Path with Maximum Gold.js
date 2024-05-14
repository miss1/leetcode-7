/**
 * @param {number[][]} grid
 * @return {number}
 * 遍历grid，以每个点作为起点，dfs+backtracking遍历所有的路径，记录最大值
 * time: O(m * n * (4^(m*n)))
 * space: O(m * n * (4^(m*n)))
 */
var getMaximumGold = function(grid) {
  const m = grid.length, n = grid[0].length;
  const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let res = 0;
  const backTrack = function(i, j, total, visited) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visited.has(`${i},${j}`)) {
      res = Math.max(res, total);
      return;
    }
    visited.add(`${i},${j}`);
    for (let d of direction) {
      backTrack(d[0] + i, d[1] + j, total + grid[i][j], visited);
    }
    visited.delete(`${i},${j}`);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      backTrack(i, j, 0, new Set());
    }
  }
  return res;
};
