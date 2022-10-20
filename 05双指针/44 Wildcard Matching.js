/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 双指针(回溯)，当不能匹配的时候回溯到上一个通配符
 * i指向s，j指向p。si指向s中最后一个被*匹配的字符，sj指向p中已经遍历过的上一个*
 * 当j指向*时，更新sj的位置指向最新的*；更新si的位置到当前的i；移动j继续比较
 * 若s[i] !== p[j]，则将j重置到sj的下一个，si加1(即被当前*匹配的字符加一)
 * time: O(mn)
 * space: O(1)
 */
var isMatch = function(s, p) {
  let i = 0, j = 0, si = -1, sj = -1;
  while (i < s.length) {
    if (p[j] === '?' || s[i] === p[j]) {
      i++;
      j++;
    } else if (p[j] === '*') {
      sj = j;
      si = i;
      j += 1;
    } else if (sj > -1) {
      j = sj + 1;
      si += 1;
      i = si;
    } else {
      return false;
    }
  }
  while (j < p.length && p[j] === '*') j++;
  return j === p.length;
};