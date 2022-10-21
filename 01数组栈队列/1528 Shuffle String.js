/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * time: O(n)
 * space: O(1)
 */
var restoreString = function(s, indices) {
  let res = new Array(s.length).fill('');
  for (let i = 0; i < s.length; i++) {
    res[indices[i]] = s[i];
  }
  return res.join('');
};