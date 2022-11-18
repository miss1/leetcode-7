/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 回溯，组合，从n个数中任取k个数能有多少种组合
 * time: O(kC(n, k))
 * space: O(C(n, k))
 */
var combine = function(n, k) {
  let res = [];
  const backTrack = function(result, start) {
    if (result.length === k) {
      res.push([...result]);
      return;
    }
    for (let i = start; i <= n; i++) {
      result.push(i);
      backTrack(result, i + 1);
      result.pop();
    }
  };
  backTrack([], 1);
  return res;
};
