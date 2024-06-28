/**
 * @param {number[][]} grid
 * @return {number}
 * 遍历，更新长方形的四个边界点的值
 * time: O(m*n)
 * space: O(1)
 */
var minimumArea = function(grid) {
  const m = grid.length, n = grid[0].length;
  let minX = m, maxX = -1;
  let minY = n, maxY = -1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        if (i < minX) minX = i;
        if (i > maxX) maxX = i;
        if (j < minY) minY = j;
        if (j > maxY) maxY = j;
      }
    }
  }
  return (maxX - minX + 1) * (maxY - minY + 1);
};