/**
 * @param {character[][]} board
 * @return {boolean}
 * 取巧的解法
 * 遍历board，将每一个数字存储到set中，包含它在第几列第几行第几个子table
 * 对于每一个值存储三个value，i(num)表示该数在第几行，(num)j表示该数在第几列，i/3(num)j/3表示该数在第几个子table
 * eg，4 -> 0(4), (4)0, 0(4)0, 表示4在第一列第一行第一个子table
 * 对于每个数先判断它对应的三个值是否在set中，是的话说明是重复的，直接返回false
 * time: O(n²)
 * space: O(n²)
 */
var isValidSudoku = function(board) {
  let set = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '.') continue;
      let key = '(' + board[i][j] + ')';
      let rowKey = i + key;
      let columnKey = key + j;
      let subKey = Math.floor(i/3) + key + Math.floor(j/3);
      if (set.has(rowKey) || set.has(columnKey) || set.has(subKey)) return false;
      set.add(rowKey);
      set.add(columnKey);
      set.add(subKey);
    }
  }
  return true;
};
