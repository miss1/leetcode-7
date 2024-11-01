/**
 * @param {string} s
 * @return {string}
 * 遍历，与前两个数比较
 * time: O(n)
 * space: O(1)
 */
var makeFancyString = function(s) {
  if (s.length < 3) return s;
  let res = s[0] + s[1];
  for (let i = 2; i < s.length; i++) {
    if (s[i] !== s[i - 1] || s[i] !== s[i - 2]) {
      res += s[i];
    }
  }
  return res;
};