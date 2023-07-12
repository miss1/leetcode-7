/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * BFS, 朝八个方向移动，同时记录层数
 * time: O(n*n)
 * space: O(n*n)
 */
var minKnightMoves = function(x, y) {
  if (x === 0 && y === 0) return 0;
  const directions = [[1, 2], [1, -2], [-1, -2], [-1, 2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
  let visited = new Set();
  visited.add('0,0');
  let current = [[0, 0]], res = 0;
  while (current.length > 0) {
    let next = [];
    for (let p of current) {
      for (let d of directions) {
        let nx = p[0] + d[0], ny = p[1] + d[1];
        if (nx === x && ny === y) return res + 1;
        if (!visited.has(nx + ',' + ny)) {
          visited.add(nx + ',' + ny);
          next.push([nx, ny]);
        }
      }
    }
    res++;
    current = next;
  }
  return -1;
};