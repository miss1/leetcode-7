/**
 * @param {number[][]} grid
 * @return {number}
 * BFS, 遍历八个方向，同时记录层数，直到到达终点
 * time: O(n*n)
 * space: O(n*n)
 */
var shortestPathBinaryMatrix = function(grid) {
  if (grid[0][0] !== 0) return -1;

  let len = grid.length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]];

  let current = [[0,0]], res = 1, visited = new Set(['0,0']);
  while (current.length > 0) {
    let next = [];
    for (let item of current) {
      if (item[0] === len - 1 && item[1] === len - 1) return res;
      for (let d of directions) {
        let x = item[0] + d[0], y = item[1] + d[1];
        if (x < 0 || x >= len || y < 0 || y >= len || grid[x][y] === 1 || visited.has(x + ',' + y)) continue;
        visited.add(x + ',' + y);
        next.push([x, y]);
      }
    }
    current = next;
    res++;
  }
  return -1;
};