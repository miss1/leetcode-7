/**
 * @param {number[][]} grid
 * @return {number}
 * 每一行组成一个binary number，越靠前的数字是1则值越大
 * 1. 每一行中，如果第一个数字是0，则翻转这一行。确保第一个数字为1
 * 2. 每一列中，如果这一列中的0的个数大于1的个数，则翻转这一列，使1的数量更多
 * If the first number in the row is 0, flip the row. If the count of 0 in the col is greater than the count of 1, flip the col.
 * time: O(m*n)
 * space: O(1)
 */
var matrixScore = function(grid) {
  const m = grid.length, n = grid[0].length;

  // If the first number in the row is 0, flip the row.
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < n; j++) {
        grid[i][j] = grid[i][j] === 0 ? 1 : 0;
      }
    }
  }

  // If the count of 0 in the col is greater than the count of 1, flip the col.
  for (let j = 0; j < n; j++) {
    let z = 0;
    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 0) z++;
    }
    if (z <= m - z) continue;
    for (let i = 0; i < m; i++) {
      grid[i][j] = grid[i][j] === 0 ? 1 : 0;
    }
  }

  // Calculate sum
  let score = 0;
  for (let i = 0; i < m; i++) {
    score += Number('0b' + grid[i].join(''));
  }

  return score;
};
