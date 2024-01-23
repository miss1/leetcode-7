/**
 * @param {string[]} arr
 * @return {number}
 * 回溯，排列所有情况
 * time: O(2 ^ n) 对于每一个i，都有两种选择，选取当前字符串，或者不选择
 * space: O(n)
 */
var maxLength = function(arr) {
  let res = 0;

  const isUnique = function(s) {
    let t = new Set(s);
    return s.length === t.size;
  };

  const backTrack = function(idx, s) {
    if (!isUnique(s)) return;
    res = Math.max(res, s.length);
    for (let i = idx; i < arr.length; i++) {
      backTrack(i + 1, s + arr[i]);
    }
  };

  backTrack(0, '');
  return res;
};