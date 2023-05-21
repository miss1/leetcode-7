/**
 * @param {number[][]} grid
 * @return {number}
 * 二维网格问题，DFS+BFS
 * 一共只有两个小岛，要寻找两个岛之间的最短路径
 * 先用DFS找到一个岛的所有元素，并将值设置为2，此时1：岛B，2：岛A，0：water
 * 再以第一个岛A为起点，BFS将A中的所有元素向四个方向扩张一格，扩张到达的新格子就是下一层。再从下一层继续扩张，直到到达B岛
 * time: O(n²)
 * space: O(n)
 */
var shortestBridge = function(grid) {
  const n = grid.length;
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  let current = [];
  const dfs = (i, j) => {
    if (i < 0 || i >= n || j < 0 || j >= n || grid[i][j] === 0 || grid[i][j] === 2) return;
    grid[i][j] = 2;
    current.push([i, j]);
    for (let d of dir) {
      dfs(i + d[0], j + d[1]);
    }
  };

  outerLoop:
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          dfs(i, j);
          break outerLoop;
        }
      }
    }

  let res = 0;
  while (current.length > 0) {
    let next = [];
    for (let item of current) {
      for (let d of dir) {
        let i = item[0] + d[0], j = item[1] + d[1];
        if (i < 0 || i >= n || j < 0 || j >= n || grid[i][j] === 2) continue;
        if (grid[i][j] === 0) {
          next.push([i, j]);
          grid[i][j] = 2;
        } else if (grid[i][j] === 1) {
          return res;
        }
      }
    }
    res++;
    current = next;
  }
  return res;
};