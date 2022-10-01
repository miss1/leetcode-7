/**
 * @param {string} s
 * @return {number}
 * 从后遍历并计数，遇到‘ ’时停止
 * time: O(n)
 * space: O(1)
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && count > 0) return count;
    if (s[i] === ' ' && count === 0) continue;
    count++;
  }
  return count;
};