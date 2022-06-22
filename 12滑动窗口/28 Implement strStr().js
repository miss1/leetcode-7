/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 固定大小的滑动窗口，查找字符串
 * time: O(n * m) haystack.length * needle.length
 * space: O(1)
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  if (needle.length > haystack.length) return -1;
  let s = '', start = 0, end = 0;
  while (s.length < needle.length) {
    s += haystack[end];
    end++;
  }
  while (end < haystack.length) {
    if (s === needle) return start;
    s = (s + haystack[end]).substr(1);
    start++;
    end++;
  }
  return s === needle ? start : -1;
};
