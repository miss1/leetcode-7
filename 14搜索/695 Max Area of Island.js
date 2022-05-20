/**
 * @param {number[][]} grid
 * @return {number}
 * DFS, 跟200题类似，dfs中加一个返回值，返回每个1(本身)以及它四个方向1的总和。
 * 因为已经把遍历过的1置为0，所以不会出现重复计算的情况
 * time: O(m * n)
 * space: O(m * n)
 */
var maxAreaOfIsland = function(grid) {
  const dfs = function(i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) return 0;
    grid[i][j] = 0;
    return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
  };
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, dfs(i, j));
      }
    }
  }
  return res;
};
