/**
 * @param {character[][]} grid
 * @return {number}
 * 小岛问题，DFS
 * 遍历每一个数字，为1时作为小岛起点开始DFS，直到每个1的四个方向都遍历完，说明找完了一个小岛，count++。
 * 将已经遍历过的小岛设置为0，避免重复遍历
 * time: O(m * n)
 * space: O(m * n)
 */
var numIslands = function(grid) {
  const dfs = function(i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
    grid[i][j] = '0';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }
  return count;
};
