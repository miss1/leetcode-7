/**
 * @param {number[][]} grid
 * @return {number}
 * 暴力解法，遍历grid，对于每一个0，假设将0变成1，以当前0为中心dfs搜索，记录当前岛屿的大小。
 * 取求得的所有岛屿中的最大值。如果不存在0，则说明整个grid为一个岛，但会grid长度即可
 * time: O(n^4)
 * space: O(n^2)
 */
var largestIsland = function(grid) {
  let n = grid.length, m = grid[0].length;
  const dfs = function(x, y, visited) {
    if (visited.has(x + ',' + y)) return 0;
    visited.add(x + ',' + y);
    let count = 1;
    if (x > 0 && grid[x - 1][y] === 1) count += dfs(x - 1, y, visited);
    if (x < n - 1 && grid[x + 1][y] === 1) count += dfs(x + 1, y, visited);
    if (y > 0 && grid[x][y - 1] === 1) count += dfs(x, y - 1, visited);
    if (y < m - 1 && grid[x][y + 1] === 1) count += dfs(x, y + 1, visited);
    return count;
  };
  let size = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        let visited = new Set();
        size = Math.max(size, dfs(i, j, visited));
      }
    }
  }
  return size === 0 ? n * m : size;
};