/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * time: O(m+n)
 * space: O(n)
 * 滑动窗口，可变窗口大小
 * 将t存储到map中，字符为key，数量为value。维护一个count变量，记录当前还未找到的t中的字符。count为0时移动左指针
 */
var minWindow = function(s, t) {
  let l = 0, str = '', res = s+'a';
  let count = t.length;
  let map = new Map();
  for (let i = 0; i < t.length; i++) map.set(t[i], (map.get(t[i]) && map.get(t[i]) + 1) || 1);
  for (let i = 0; i < s.length; i++) {
    str += s[i];
    if (map.has(s[i]) && map.get(s[i]) > 0) count--;
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) - 1);
    while (count === 0) {
      res = res.length < str.length ? res : str;
      str = str.substr(1);
      if (map.get(s[l]) === 0) count++;
      if (map.has(s[l])) map.set(s[l], map.get(s[l]) + 1);
      l++;
    }
  }
  return res.length > s.length ? '' : res;
};