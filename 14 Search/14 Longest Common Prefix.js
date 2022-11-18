/**
 * @param {string[]} strs
 * @return {string}
 * 暴力解法
 * time: O(s) s为所有字符串的字符总和
 * space: O(1)
 */
var longestCommonPrefix = function(strs) {
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (res === '') return res;
    let str = strs[i], j = 0, tmp = '';
    while (j < str.length && j < res.length) {
      if (str[j] !== res[j]) break;
      tmp += str[j];
      j++;
    }
    res = tmp;
  }
  return res;
};

/**
 * @param {string[]} strs
 * @return {string}
 * 递归，将上述暴力解法改成递归
 * time: O(s) s为所有字符串的字符总和
 * space: O(n) n为strs.length
 */
var longestCommonPrefix2 = function(strs) {
  const dp = function(prefix, index) {
    if (index === strs.length || prefix === '') return prefix;
    let str = strs[index];
    let i = 0, tmp = '';
    while (i < prefix.length && i < str.length) {
      if (str[i] !== prefix[i]) break;
      tmp += str[i];
      i++;
    }
    return dp(tmp, index+1);
  };
  return dp(strs[0], 1);
};
