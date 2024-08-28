/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 * DFS，先遍历grid1，如果grid2中对应的位置也是，则修改值为2，用于记录当前cell属于grid1中的island
 * 再遍历grid2，查看是否整个island的值都是2
 * time: O(m*n)
 * space: O(m*n)
 */
var countSubIslands = function(grid1, grid2) {
  const m = grid1.length, n = grid1[0].length;
  const direction = [[0, 1], [1, 0], [-1, 0], [0, -1]], visited = new Set();
  let tag = true;

  const dfs = (grid, i, j, type) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visited.has(i + ',' + j)) return;
    visited.add(i + ',' + j);

    if (grid2[i][j] === 1) {
      if (type === 1) grid2[i][j] = 2;
      else tag = false;
    }

    for (let [x, y] of direction) {
      dfs(grid, i + x, j + y, type);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid1[i][j] === 1 && !visited.has(i + ',' + j)) {
        dfs(grid1, i, j, 1);
      }
    }
  }

  visited.clear();
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] !== 0 && !visited.has(i + ',' + j)) {
        tag = true;
        dfs(grid2, i, j, 2);
        if (tag) res++;
      }
    }
  }

  return res;
};