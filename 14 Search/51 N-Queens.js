/**
 * @param {number} n
 * @return {string[][]}
 * 回溯，暴力枚举所有情况，存储符合条件的值
 * time: O(n²)
 * space: O(n)
 */
var solveNQueens = function(n) {
  let res = [];
  const backTrack = function(result, i) {
    if (result.length === n) {
      let r = result.map(val => '.'.repeat(val[1]) + 'Q' + '.'.repeat(n - val[1] - 1));
      res.push(r);
      return;
    }
    for (let j = 0; j < n; j++) {
      let f = result.some(val => val[1] === j || Math.abs(val[0] - i) === Math.abs(val[1] - j));
      if (!f) {
        result.push([i, j]);
        backTrack(result, i+1);
        result.pop();
      }
    }
  };
  backTrack([], 0);
  return res;
};
