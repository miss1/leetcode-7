/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 按k个字符一组遍历字符串，翻转拼接
 * time: O(n)
 * space: O(1)
 */
var reverseStr = function(s, k) {
  let res = '', tag = true;
  while (res.length < s.length) {
    let i = res.length - 1;
    if (tag) {
      let j = i + k >= s.length ? s.length - 1 : i + k;
      while (j > i) {
        res += s[j];
        j--;
      }
    } else {
      let j = i + 1;
      while (j < s.length && j <= i + k) {
        res += s[j];
        j++;
      }
    }
    tag = !tag;
  }
  return res;
};