/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 * BFS
 * 类似于797，BFS寻找两点之间的所有路径，当到达目标点时，说明找到了最短路径，返回路径长度即可
 * 记录到达每个点时遇到的障碍物数量，当数量大于k说明不能往下走
 * time: O(m*n*k)
 * space: O(m*n*k)
 */
var shortestPath = function(grid, k) {
  const m = grid.length, n = grid[0].length;
  if (m === 1 && n === 1) return 0;

  const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let queue = [[[0,0,0]]]; // x, y, the number of obstacle
  const visited = new Set(['0,0,0']); // 如果遇到同一个点并且障碍数相同，说明重复了

  while (queue.length > 0) {
    let nextLevel = [];
    for (let node of queue) {
      let current = node[node.length - 1];
      for (let d of direction) {
        let new_x = current[0] + d[0];
        let new_y = current[1] + d[1];
        if (new_x < 0 || new_x >= m || new_y < 0 || new_y >= n) continue;

        let new_ob = grid[new_x][new_y] === 1 ? current[2] + 1 : current[2];
        if (new_ob > k || visited.has(`${new_x},${new_y},${new_ob}`)) continue;

        if (new_x === m - 1 && new_y === n - 1) return node.length;

        nextLevel.push([...node, [new_x, new_y, new_ob]]);
        visited.add(`${new_x},${new_y},${new_ob}`);
      }
    }
    queue = nextLevel;
  }
  return -1;
};