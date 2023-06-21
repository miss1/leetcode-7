/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * 回溯，寻找三个数的组合，和为n
 * time: O(C(n, k) = n! / (k! * (n - k)!))
 * space: O(k)
 */
var combinationSum3 = function(k, n) {
  let res = [];
  const backTrack = function(arr, start, sum) {
    if (sum > n) return;
    if (arr.length === k) {
      if (sum === n) res.push([...arr]);
      return;
    }
    for (let i = start; i <= 9; i++) {
      arr.push(i);
      backTrack(arr, i + 1, sum + i);
      arr.pop();
    }
  };
  backTrack([], 1, 0);
  return res;
};