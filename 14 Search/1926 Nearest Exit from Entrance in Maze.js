/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 * 二维矩阵的BFS，从entrance开始向四个方向扩张，直到到达边界外
 * time: O(m*n)
 * space: O(m + n)
 */
var nearestExit = function(maze, entrance) {
  let current = [entrance], res = 0;
  let m = maze.length, n = maze[0].length;
  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  maze[entrance[0]][entrance[1]] = '+';
  while (current.length > 0) {
    let next = [];
    for (let g of current) {
      for (let d of directions) {
        let x = g[0] + d[0], y = g[1] + d[1];
        if (x >= m || x < 0 || y >= n || y < 0) {
          if (res > 0) return res;
          else continue;
        }
        if (maze[x][y] === '+') continue;
        next.push([x, y]);
        maze[x][y] = '+';
      }
    }
    current = next;
    res++;
  }
  return -1;
};