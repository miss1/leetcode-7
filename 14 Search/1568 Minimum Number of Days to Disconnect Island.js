/**
 * @param {number[][]} grid
 * @return {number}
 * 有三种情况，grid中没有岛，有1个岛，大于1个岛。只有存在1个岛的时候需要处理
 * 只有1个岛时，最多需要翻转2次就可以把它切成两个岛：在岛的四边，找一个角落的cell，把它上方斜边两个cell翻转即可
 * 这时有两种情况：翻转1次或者翻转两次
 * brute force：遍历grid，依次尝试将每个1改成0，然后dfs遍历查看当前有几个岛，确认是否可以在翻转一次的情况下成功，否则返回2
 * time: O((m*n)²)
 * space: O(m*n)
 */
var minDays = function(grid) {
  const m = grid.length, n = grid[0].length;

  const visited = new Set();

  const dfs = function(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visited.has(i + ',' + j)) return;
    visited.add(i + ',' + j);
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i - 1, j);
  };

  const countIsland = function() {
    visited.clear();
    let count = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1 && !visited.has(i + ',' + j)) {
          dfs(i, j);
          count++;
        }
      }
    }
    return count;
  };

  const num = countIsland();
  if (num === 0 || num > 1) return 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        const t = countIsland();
        if (t === 0 || t > 1) return 1;
        grid[i][j] = 1;
      }
    }
  }

  return 2;
};