/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 跟36题类似的方法，用set存储每个数字的位置信息，用于判断是否是正确的数独
 * 回溯，遍历每个空格，每个空格分别尝试填入1-9，不正确时回溯重填
 * time: O(n^3) n=9
 * space: O(n^3)
 */
var solveSudoku = function(board) {
  let set = new Set();
  // 填入一个数字
  const addNum = function(num, i, j) {
    let key = '(' + num + ')';
    let subKey = Math.floor(i/3) + key + Math.floor(j/3);
    set.add(i + key);
    set.add(key + j);
    set.add(subKey);
  };
  // 回溯移除一个数字
  const removeNum = function(num, i, j) {
    let key = '(' + num + ')';
    let subKey = Math.floor(i/3) + key + Math.floor(j/3);
    set.delete(i + key);
    set.delete(key + j);
    set.delete(subKey);
  };
  // 判断数字是否可以填入当前空格
  const isValideNum = function(num, i, j) {
    let key = '(' + num + ')';
    let subKey = Math.floor(i/3) + key + Math.floor(j/3);
    return !(set.has(i + key) || set.has(key + j) || set.has(subKey));
  };
  // 将数独中预置的数字填充到set中
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== '.') addNum(board[i][j], i, j);
    }
  }
  // 回溯遍历每一个空格
  const fillBoard = function() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] !== '.') continue;
        // 对于每个数字，尝试1-9
        for (let k = 1; k <= 9; k++) {
          if (isValideNum(k, i, j)) {
            board[i][j] = k + '';
            addNum(k, i, j);
            if (fillBoard()) return true;
            else {
              removeNum(board[i][j], i, j);
              board[i][j] = '.';
            }
          }
        }
        // 9个数字都不行，说明当前无解，需要回溯
        return false;
      }
    }
    return true;
  };
  fillBoard();
};
