/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * time: O(n)
 * space: O(1)
 */
var isSubsequence = function(s, t) {
  let i = 0, j = 0;
  while (i < t.length) {
    if (j >= s.length) return true;
    if (s[j] === t[i]) j++;
    i++;
  }
  return j >= s.length;
};