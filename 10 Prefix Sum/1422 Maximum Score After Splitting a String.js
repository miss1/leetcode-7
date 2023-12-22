/**
 * @param {string} s
 * @return {number}
 * time: O(n)
 * space: O(1)
 */
var maxScore = function(s) {
  let total_1 = 0;
  for (let c of s) {
    if (c === '1') total_1++;
  }
  let left_0 = 0, left_1 = 0, res = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') left_0++;
    else if (s[i] === '1') left_1++;
    res = Math.max(res, left_0 + (total_1 - left_1));
  }
  return res;
};