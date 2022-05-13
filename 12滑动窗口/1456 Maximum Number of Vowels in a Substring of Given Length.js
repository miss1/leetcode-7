/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 滑动窗口，固定窗口大小
 * time: O(n)
 * space: O(1)
 */
var maxVowels = function(s, k) {
  let count = 0;
  let start = 0, end = 0;
  let set = new Set(['a', 'e', 'i', 'o', 'u']);
  while (end < k) {
    if (set.has(s[end])) count++;
    end++;
  }
  let res = count;
  while (end < s.length) {
    if (set.has(s[end])) count++;
    if (set.has(s[start])) count--;
    res = Math.max(res, count);
    start++;
    end++;
  }
  return res;
};
