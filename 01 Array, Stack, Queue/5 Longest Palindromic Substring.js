/**
 * @param {string} s
 * @return {string}
 * 最长回文子串。先在s的每个间隔中插入#分隔符，预防回文是双数的情况。
 * 遍历每一个字符，将当前字符视为回文的中心，向两边扩散，直到不能形成回文。
 * time: O(n²)
 * space: O(1)
 */
var longestPalindrome = function(s) {
  let res = '';
  s = s.split('').join('#');
  for (let i = 0; i < s.length; i++) {
    let left = i, right = i, tmp = '';
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (s[left] !== '#') {
        if (left === right) tmp = s[left];
        else tmp = s[left] + tmp + s[right];
      }
      left--;
      right++;
    }
    res = res.length < tmp.length ? tmp : res;
  }
  return res;
};
