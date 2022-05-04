/**
 * @param {number[][]} grid
 * @return {number}
 * 动态规划+桶排序的就位思想。遍历每一个点，计算起点到当前点的最短距离，将值设置到当前位置。
 * 到当前点的最短距离等于上一个点（可以是左边的也可以是右边的，取最小值）的数字加当前点的数字。最后得到最后一个点的值就是所求。
 * time: O(m * n)
 * space: O(1)
 */
var minPathSum = function(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) grid[i][j] += grid[i][j - 1];
      else if (j === 0) grid[i][j] += grid[i - 1][j];
      else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};
