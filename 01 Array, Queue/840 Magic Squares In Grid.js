/**
 * @param {number[][]} grid
 * @return {number}
 * brute force. 逐个检查每个3*3grid是否满足条件
 * 注意条件：1，只能包含数字1-9；2，不能有重复数字；3，row, column, and both diagonals的和相等
 * time: O(m*n)
 * space: O(1)
 */
var numMagicSquaresInside = function(grid) {
  const m = grid.length, n = grid[0].length;

  const isMagic = function(x, y) {
    let sum = grid[x][y] + grid[x+1][y+1] + grid[x+2][y+2];
    if (sum !== grid[x+2][y] + grid[x+1][y+1] + grid[x][y+2]) return false;

    const set = new Set();
    for (let i = x; i < x + 3; i++) {
      if (grid[i][y] === 0 || grid[i][y+1] === 0 || grid[i][y+2] === 0) return false;
      if (grid[i][y] > 9 || grid[i][y+1] > 9 || grid[i][y+2] > 9) return false;
      if (sum !== grid[i][y] + grid[i][y+1] + grid[i][y+2]) return false;
      set.add(grid[i][y]);
      set.add(grid[i][y+1]);
      set.add(grid[i][y+2]);
    }

    if (set.size !== 9) return false;

    for (let j = y; j < y + 3; j++) {
      if (sum !== grid[x][j] + grid[x+1][j] + grid[x+2][j]) return false;
    }

    return true;
  };

  let res = 0;
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      if (isMagic(i, j)) res++;
    }
  }

  return res;
};