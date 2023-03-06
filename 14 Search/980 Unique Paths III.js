/**
 * @param {number[][]} grid
 * @return {number}
 * backtrack
 * 先找到起点，并且累计一共有多少空格需要走
 * backTrack四个方向，每走一步减少一个空格
 * time: O(3^(m*n))  对于每一个格子。有四个方向，忽略来时的方向，还剩三个方向。一共有m*n个格子，所以是m*n个3
 * space: O(n) for recursion
 */
var uniquePathsIII = function(grid) {
  const m = grid.length, n = grid[0].length;
  let startM = 0, startN = 0, squares = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        startM = i;
        startN = j;
      }
      if (grid[i][j] >= 0) {
        squares++;
      }
    }
  }
  let result = 0;
  const d = [[-1, 0], [1, 0], [0, 1], [0, -1]];
  const backTrack = function(sm, sn, squares) {
    if (sm < 0 || sm >= m || sn < 0 || sn >= n || grid[sm][sn] < 0) return;
    if (grid[sm][sn] === 2) {
      if (squares === 1) result += 1;
      return;
    }

    let tmp = grid[sm][sn];
    grid[sm][sn] = -4;
    squares -= 1;
    for (let i = 0; i < 4; i++) {
      backTrack(sm + d[i][0], sn + d[i][1], squares);
    }
    grid[sm][sn] = tmp;
  }

  backTrack(startM, startN, squares);
  return result;
};