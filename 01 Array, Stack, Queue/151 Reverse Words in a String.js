/**
 * @param {string} s
 * @return {string}
 * 遍历s，找出所有world，记录到数组arr中。
 * 再从后往前遍历arr，拼接字符串
 * time: O(n)
 * space: O(n)
 */
var reverseWords = function(s) {
  let arr = [], curr = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      curr += s[i];
    } else if (i > 0 && s[i - 1] !== ' ') {
      arr.push(curr);
      curr = '';
    }
  }
  if (curr) arr.push(curr);
  let res = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    res += arr[i];
    if (i !== 0) res += ' ';
  }
  return res;
};