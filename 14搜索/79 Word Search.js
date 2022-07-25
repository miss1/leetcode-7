/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 回溯，先遍历矩阵，找到起点，再从起点开始查找四个方向是否满足条件，将已经走过的点标记为'#'，当某一个方向走不通时，去除标记
 * time: O(n * 3^m), n为矩阵中点的个数；对于word中的每个字符，都有三个方向可选（因为有标记，所以不会走回头路）所以是3的m次方
 * space: O(m), word.length, 递归占用的空间
 */
var exist = function(board, word) {
  let n = board.length, m = board[0].length;
  let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const isExist = function(x, y, index) {
    if (index >= word.length) return true;
    if (x < 0 || x >= n || y < 0 || y >= m || board[x][y] !== word[index]) return false;
    board[x][y] = '#';
    for (let i = 0; i < direction.length; i++) {
      let tag = isExist(x + direction[i][0], y + direction[i][1], index + 1);
      if (tag) return true
    }
    board[x][y] = word[index];
    return false;
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (isExist(i, j, 0)) return true;
    }
  }
  return false;
};
