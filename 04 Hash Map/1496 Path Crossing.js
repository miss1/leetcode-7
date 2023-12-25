/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  let x = 0, y = 0;
  let visited = new Set(['0,0']);
  let d = {'N': [0, 1], 'E': [1, 0], 'S': [0, -1], 'W': [-1, 0]}
  for (let p of path) {
    x = d[p][0] + x;
    y = d[p][1] + y;
    if (visited.has(x + ',' + y)) return true;
    visited.add(x + ',' + y);
  }
  return false;
};