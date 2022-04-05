/**
 * @param {string} s
 * @return {number}
 * time: O(n)
 * space: O(n)
 * 滑动窗口，可变窗口大小,用set存储子串，set中包含当前字符时移动左指针
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0, set = new Set();
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      res = Math.max(res, set.size);
      set.delete(s[l]);
      l++;
    }
    set.add(s[i]);
  }
  return Math.max(res, set.size);
};