/**
 * @param {number[][]} grid
 * @return {number}
 * BFS + Dijkstra’s algorithm
 * 1. 先BFS计算每一个cell到1的最短距离，（先获取到所有1，再bfs更新每个cell的距离），生成新的数组arr
 * 2. 对于arr，用Dijkstra’s algorithm寻找从起点(0,0)到终点(n-1,n-1)之间的最短路径
 * 这里的最短路径指路径中Manhattan distance最小的点。从起点开始，每次取distance最大的点作为下一个点，然后更新当前点的distance
 * time: O(n*n + n*n*logn)
 * space: O(n * n)
 */
var maximumSafenessFactor = function(grid) {
  const n = grid.length;
  const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  // 获取所有的1（起点）
  const arr = new Array(n).fill(Infinity).map(val => new Array(n).fill(Infinity));
  let current = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        current.push([i, j]);
        arr[i][j] = 0;
      }
    }
  }

  // bfs更新每个点的distance
  while (current.length > 0) {
    let next = [];
    for (let [x, y] of current) {
      for (let [i, j] of direction) {
        const nx = x + i, ny = y + j;
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || arr[x][y] + 1 >= arr[nx][ny]) continue;
        arr[nx][ny] = arr[x][y] + 1;
        next.push([nx, ny]);
      }
    }
    current = next;
  }

  // Dijkstra’s algorithm寻找最短路径
  let visited = new Set();
  let queue = new PriorityQueue({compare: (a, b) => b[0] - a[0]});
  queue.enqueue([arr[0][0], 0, 0]);
  visited.add('0,0');
  while (!queue.isEmpty()) {
    const [d, x, y] = queue.dequeue();
    if (x === n - 1 && y === n - 1) return d;
    for (let [i, j] of direction) {
      const nx = x + i, ny = y + j;
      if (nx < 0 || nx >= n || ny < 0 || ny >= n || visited.has(`${nx},${ny}`)) continue;
      arr[nx][ny] = Math.min(arr[nx][ny], arr[x][y]);
      queue.enqueue([arr[nx][ny], nx, ny]);
      visited.add(`${nx},${ny}`);
    }
  }

  return -1;
};
