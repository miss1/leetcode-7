/**
 * @param {number[][]} grid
 * @return {number}
 * 根据题意，从第一列的任意位置出发，要求能到达的最大列数
 * 新建一个二维数组arr，记录每一个格子是否可达。初始化第一列是起点，所有格子都可达
 * 遍历grid(以列为单位)，对于每一个cell grid[i][j]，有三个方向可以到达它，所以只需判断它前面这三个方向的格子是否可达
 * 只要三个方向任意一个方向可达并且值比grid[i][j]小，那grid[i][j]也可达。更新arr，同时记录当前到达的最大列数
 * 最后返回最大列数即可
 * time: O(m*n)
 * space: O(m*n)
 */
var maxMoves = function(grid) {
  let m = grid.length, n = grid[0].length;
  let arr = new Array(m).fill(false).map(val => new Array(n).fill(false));
  let res = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (j === 0) {
        arr[i][j] = true;
        continue;
      }
      let left = !!(arr[i][j - 1] && grid[i][j - 1] < grid[i][j]);
      let top = !!(i > 0 && arr[i - 1][j - 1] && grid[i - 1][j - 1] < grid[i][j]);
      let bottom = !!(i < m - 1 && arr[i + 1][j - 1] && grid[i + 1][j - 1] < grid[i][j]);
      if (left || top || bottom) {
        arr[i][j] = true;
        res = Math.max(res, j);
      }
    }
  }
  return res;
};