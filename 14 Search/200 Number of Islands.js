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

/**
 * @param {character[][]} grid
 * @return {number}
 * BFS
 * time: O(m * n)
 * space: O(Math.min(m,n))
 */
var numIslands2 = function(grid) {
  let res = 0;
  const direction = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        res += 1;
        grid[i][j] = '0';
        let current = [[i, j]];
        while (current.length > 0) {
          let next = [];
          for (let g of current) {
            for (let d of direction) {
              const x = d[0] + g[0], y = d[1] + g[1];
              if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === '0') continue;
              next.push([x, y]);
              grid[x][y] = '0';
            }
          }
          current = next;
        }
      }
    }
  }
  return res;
};
