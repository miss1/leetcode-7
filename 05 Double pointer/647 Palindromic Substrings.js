/**
 * @param {string} s
 * @return {number}
 * 暴力解法。检查所有的子串，判断是否是回文
 * time: O(n^3)
 * space: O(1)
 */
var countSubstrings = function(s) {
  const isPalindromic = function(str) {
    let i = 0, j = str.length - 1;
    while (i <= j) {
      if (str[i] === str[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  };
  let count = s.length;
  for (let i = 0; i < s.length - 1; i++) {
    let str = s[i];
    for (let j = i + 1; j < s.length; j++) {
      str += s[j];
      if (isPalindromic(str)) count += 1;
    }
  }
  return count;
};

/**
 * @param {string} s
 * @return {number}
 * 遍历s，对于每个字符，把它当成中心，只要能形成回文，就向两边扩展
 * time: O(n²)
 * space: O(1)
 */
var countSubstrings2 = function(s) {
  let count = 0;
  const palindromicNumber = function(left, right) {
    let n = 1;
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        n += 1;
        left--;
        right++;
      } else {
        return n;
      }
    }
    return n;
  };
  for (let i = 0; i < s.length; i++) {
    count += palindromicNumber(i - 1, i + 1);
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      count += palindromicNumber(i - 1, i + 2);
    }
  }
  return count;
};