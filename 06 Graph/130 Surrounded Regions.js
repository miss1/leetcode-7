/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * DFS
 * 先dfs获取所有不靠边界的由O组成的component，记录到数组中
 * 再遍历数组修将O修改成X
 * time: O(m*n)
 * space: O(m*n)
 */
var solve = function(board) {
  const m = board.length, n = board[0].length;

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const visited = new Set(), currentVisited = new Set();
  let tag = true;

  const dfs = (i, j) => {
    visited.add(i + ',' + j);
    currentVisited.add(i + ',' + j);

    for (let [x, y] of directions) {
      const nx = x + i, ny = y + j;
      if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
        tag = false;
        continue;
      }
      if (board[nx][ny] === 'X' || visited.has(nx + ',' + ny)) continue;
      dfs(nx, ny);
    }

    return true;
  };


  const captured = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O' && !visited.has(i + ',' + j)) {
        currentVisited.clear();
        tag = true;
        dfs(i, j)
        if (tag) captured.push(...currentVisited);
      }
    }
  }

  for (let str of captured) {
    const [i, j] = str.split(',');
    board[i][j] = 'X';
  }
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * DFS，换个思路，只有边界上有O的components可以保持为O
 * 所以只需从边界上的O开始DFS，将遍历到的所有O进行标记，最后再修改值即可（将非标记的值都改成X）
 * time: O(m*n)
 * space: O(min(m, n)) // depth of recursion
 */
var solve2 = function(board) {
  const m = board.length, n = board[0].length;

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === 'X' || board[i][j] === 'T') return;
    board[i][j] = 'T';
    for (let [x, y] of directions) {
      const nx = x + i, ny = y + j;
      dfs(nx, ny);
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O' && (i === 0 || i === m - 1 || j === 0 || j === n - 1)) {
        dfs(i, j)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'T') {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }
};