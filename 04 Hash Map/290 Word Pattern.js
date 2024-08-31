/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 先将s按‘ ’分割成不同的word存储到数组arr
 * arr的长度应该和pattern相同，pattern[i]字符对应的值应该是arr[i]
 * 用hashmap存储每个字符对应的word，注意每个字符对应的值应该唯一
 * time: O(n)
 * space: O(n)
 */
var wordPattern = function(pattern, s) {
  const arr = s.split(' ');
  if (arr.length !== pattern.length) return false;
  const map = new Map(), record = new Set();
  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      if (record.has(arr[i])) return false;
      map.set(pattern[i], arr[i]);
      record.add(arr[i]);
    } else {
      if (map.get(pattern[i]) !== arr[i]) return false;
    }
  }
  return true;
};