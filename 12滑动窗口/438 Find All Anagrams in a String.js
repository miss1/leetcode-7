/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 滑动窗口，固定窗口长度
 * 新建两个长度为26的数组，summary用于存储p中每个字母的个数，count用于存储窗口中的每个字母个数。
 * 每次移动窗口之后，比较summary和count是否完全相等，若相等，则当前窗口是一个解
 * time: O(n)
 * space: O(1)
 */
var findAnagrams = function(s, p) {
  if (p.length > s.length) return [];
  let summary = new Array(26).fill(0);
  let count = new Array(26).fill(0);
  let start = 0, end = 0;
  let res = [];
  for (let i = 0; i < p.length; i++) summary[p[i].charCodeAt(0) - 97] += 1;
  while (end < p.length) {
    count[s[end].charCodeAt(0) - 97] +=1;
    end++;
  }
  if (count.toString() === summary.toString()) res.push(0);
  while (end < s.length) {
    count[s[end].charCodeAt(0) - 97] +=1;
    count[s[start].charCodeAt(0) - 97] -=1;
    end++;
    start++;
    if (count.toString() === summary.toString()) res.push(start);
  }
  return res;
};
