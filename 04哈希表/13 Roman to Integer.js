/**
 * @param {string} s
 * @return {number}
 * 哈希表存储罗马符号和对应的数字，遍历字符串，累加相应的数字，对减法做判断
 * time: O(n)
 * space: O(1)
 */
var romanToInt = function (s) {
  let map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  let res = 0, i = 0;
  while (i < s.length) {
    let s1 = s[i], s2 = s[i + 1];
    if ((s1 === 'I' && (s2 === 'V' || s2 === 'X')) || (s1 === 'X' && (s2 === 'L' || s2 === 'C')) || (s1 === 'C' && (s2 === 'D' || s2 === 'M'))) {
      res += map[s2] - map[s1];
      i++;
    } else res += map[s1];
    i++;
  }
  return res;
};