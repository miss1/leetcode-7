/**
 * @param {number[][]} grid
 * @return {number}
 * 暴力解法，遍历grid，对于每一个0，假设将0变成1，以当前0为中心dfs搜索，记录当前岛屿的大小。
 * 取求得的所有岛屿中的最大值。如果不存在0，则说明整个grid为一个岛，返回grid长度即可
 * time: O(n^4)
 * space: O(n^2)
 */
var largestIsland = function(grid) {
  let n = grid.length, m = grid[0].length;
  const dfs = function(x, y, visited) {
    if (visited.has(x + ',' + y)) return 0;
    visited.add(x + ',' + y);
    let count = 1;
    if (x > 0 && grid[x - 1][y] === 1) count += dfs(x - 1, y, visited);
    if (x < n - 1 && grid[x + 1][y] === 1) count += dfs(x + 1, y, visited);
    if (y > 0 && grid[x][y - 1] === 1) count += dfs(x, y - 1, visited);
    if (y < m - 1 && grid[x][y + 1] === 1) count += dfs(x, y + 1, visited);
    return count;
  };
  let size = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        let visited = new Set();
        size = Math.max(size, dfs(i, j, visited));
      }
    }
  }
  return size === 0 ? n * m : size;
};


/**
 * @param {number[][]} grid
 * @return {number}
 * 上面暴力解法的优化。
 * 先DFS遍历记录每个小岛的size。用一个数组arr记录每一个单元所属的小岛的size，同时用id给每个小岛编号，遍历的时候将id更新到grid中，避免重复计算
 * 再遍历grid，对于每一个0，通过arr判断它四个方向相邻的单元是否属于某个小岛，是的话将size相加
 * time: O(n²)
 * space: O(n²)
 */
var largestIsland2 = function(grid) {
  let n = grid.length;
  let arr = new Array(n).fill(0).map(val => new Array(n).fill(0));
  // DFS遍历，获取每个小岛的单元格个数
  const dfs = function(x, y, id) {
    if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] !== 1) return 0;
    grid[x][y] = id;
    return 1 + dfs(x - 1, y, id) + dfs(x + 1, y, id) + dfs(x, y - 1, id) + dfs(x, y + 1, id);
  }
  // id表示每个小岛的编号，map存储对应小岛的长度
  let id = 2, map = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 1说明找到一个小岛，dfs计算长度，并将遍历过的单元格值更新为id值
      if (grid[i][j] === 1) {
        arr[i][j] = dfs(i, j, id);
        map.set(id, arr[i][j]);
        id += 1;
      } else if (grid[i][j] !== 0 && arr[i][j] === 0) {
        // 单元格值既不是0也不是1，说明之前已经遍历过这个格子，直接从map中取出对应小岛的长度
        arr[i][j] = map.get(grid[i][j]);
      }
    }
  }
  // 对于每个0，如果将它改成1，看它四个方向是否与小岛相邻，通过比对id，去除重复值（比如上右两个方向的岛是同一个岛）
  let size = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        let set = new Set(), count = 1;
        if (i > 0 && arr[i - 1][j] !== 0 && !set.has(grid[i - 1][j])) {
          set.add(grid[i - 1][j]);
          count += arr[i - 1][j];
        }
        if (i < n - 1 && arr[i + 1][j] !== 0 && !set.has(grid[i + 1][j])) {
          set.add(grid[i + 1][j]);
          count += arr[i + 1][j];
        }
        if (j > 0 && arr[i][j - 1] !== 0 && !set.has(grid[i][j - 1])) {
          set.add(grid[i][j - 1]);
          count += arr[i][j - 1];
        }
        if (j < n - 1 && arr[i][j + 1] !== 0 && !set.has(grid[i][j + 1])) {
          set.add(grid[i][j + 1]);
          count += arr[i][j + 1];
        }
        size = Math.max(size, count);
      }
    }
  }
  return size === 0 ? n * n : size;
};