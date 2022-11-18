/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 用一个数据tag记录需要更改的状态的数据的位置。最后再遍历tag，修改board中的数据
 * time: O(mn)
 * space: O(mn)
 */
var gameOfLife = function(board) {
  let tag = [];
  let n = board.length, m = board[0].length;
  let direction = [[1, 0], [-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let liveNeighbors = 0;
      for (let x = 0; x < direction.length; x++) {
        let nextI = i + direction[x][0];
        let nextJ = j + direction[x][1];
        if (nextI >= 0 && nextI < n && nextJ >= 0&& nextJ < m && board[nextI][nextJ] === 1) {
          liveNeighbors++;
        }
      }
      if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) tag.push([i, j]);
      if (board[i][j] === 0 && liveNeighbors === 3) tag.push([i, j]);
    }
  }
  for (let i = 0; i < tag.length; i++) {
    let x = tag[i][0], y = tag[i][1];
    board[x][y] = board[x][y] === 0 ? 1 : 0;
  }
};


/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 不用另外用tag做标记。直接在board中最标记，将原先是1需要改成0的数设置为2，将原先是0需要改成1的数设置为-1；
 * 每次判断邻居状态时， > 0 则为live，<= 0 则为dead
 * 最后遍历board，将2改为0，-1改为1
 * time: O(mn)
 * space: O(1)
 */
var gameOfLife2 = function(board) {
  let n = board.length, m = board[0].length;
  let direction = [[1, 0], [-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let liveNeighbors = 0;
      for (let x = 0; x < direction.length; x++) {
        let nextI = i + direction[x][0];
        let nextJ = j + direction[x][1];
        if (nextI >= 0 && nextI < n && nextJ >= 0&& nextJ < m && board[nextI][nextJ] > 0) {
          liveNeighbors++;
        }
      }
      if (board[i][j] > 0) {
        if (liveNeighbors < 2 || liveNeighbors > 3) board[i][j] = 2;
      } else {
        if (liveNeighbors === 3) board[i][j] = -1;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 2) board[i][j] = 0;
      else if (board[i][j] === -1) board[i][j] = 1;
    }
  }
};

