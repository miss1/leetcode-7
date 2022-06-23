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


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * KMP 方法
 * time: O(n + m)
 * space: O(m)
 */
var strStr2 = function(haystack, needle) {
  if (needle.length === 0) return 0;
  const n = haystack.length, m = needle.length;
  const s = ' ' + haystack;
  const p = ' ' + needle;
  const next = new Array(m + 1).fill(0);
  for (let i = 2, j = 0; i <= m; i++) {
    while (j > 0 && p[i] !== p[j + 1]) j = next[j];
    if (p[i] === p[j + 1]) j++;
    next[i] = j;
  }

  for (let i = 1, j = 0; i <= n; i++) {
    while (j > 0 && s[i] !== p[j + 1]) j = next[j];
    if (s[i] === p[j + 1]) j++;
    if (j === m) return i - m;
  }
  return -1;
};
