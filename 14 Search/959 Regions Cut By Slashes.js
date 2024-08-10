/**
 * @param {string[]} grid
 * @return {number}
 * 这题可以转换成求岛屿数量
 * Try drawing each grid using pixels. 对于每一个字符，用3*3的格子来表示，/和\分别表示对角线
 * eg: grid = ["/\","\/"], 一共2*2四个格子，每个格子都用3*3格子表示
 * 0 0 1 1 0 0
 * 0 1 0 0 1 0
 * 1 0 0 0 0 1
 * 1 0 0 0 0 1
 * 0 1 0 0 1 0
 * 0 0 1 1 0 0
 * 可以得到上面的二维数组。现在要求的就是由0组成的岛屿的个数，DFS遍历岛屿个数即可,参考lc200
 * time: O(3n*3n)
 * space: O(3n*3n)
 */
var regionsBySlashes = function(grid) {
  const n = grid.length * 3;
  const arr = new Array(n).fill(0).map(val => new Array(n).fill(0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      const x = i * 3, y = j * 3;
      if (grid[i][j] === '/') {
        arr[x][y+2] = 1;
        arr[x+1][y+1] = 1;
        arr[x+2][y] = 1;
      } else if (grid[i][j] === '\\') {
        arr[x][y] = 1;
        arr[x+1][y+1] = 1;
        arr[x+2][y+2] = 1;
      }
    }
  }

  const dfs = function(i, j) {
    if (i < 0 || i >= n || j < 0 || j >= n || arr[i][j] === 1 || arr[i][j] === -1) return;
    arr[i][j] = -1;
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i - 1, j);
  };

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0) {
        dfs(i, j);
        res++;
      }
    }
  }

  return res;
};