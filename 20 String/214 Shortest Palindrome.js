/**
 * @param {string} s
 * @return {string}
 * 只能在s的头部添加字符串，所以需要先找出s[0]开头时，最长的回文字符串
 * 假设最长的回文字符串为s[0-i], 则需要将后半部分s[i-n]翻转然后添加到s头部
 * 寻找s[0]开头时，最长的回文字符串:
 * 1. 将s翻转得到s1
 * 2. 找到字符串t, t是s中的prefix，并且t是s1中的suffix，且t的长度最长，则t是最长的回文串
 * time: O(n)
 * space: O(1)
 */
var shortestPalindrome = function(s) {
  const s1 = s.split('').reverse().join('');
  let len = 0, i = 0, j = s1.length - 1;
  let str1 = '', str2 = '';
  while (i < s.length) {
    str1 += s[i];
    str2 = s1[j] + str2;
    if (str1 === str2) len = Math.max(len, str1.length);
    i++;
    j--;
  }
  return s1.slice(0, s1.length - len) + s;
};