/**
 * @param {number} n
 * @return {number}
 * 回溯，暴力枚举所有情况
 * time: O(n²)
 * space: O(n)
 */
var totalNQueens = function(n) {
  let res = 0;
  const backTrack = function(result, i) {
    if (result.length === n) {
      res++;
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
