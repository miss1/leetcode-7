/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 * 长度不定的移动窗口
 * 当cost超过max时，移动左指针
 * time: O(n)
 * space: O(1)
 */
var equalSubstring = function(s, t, maxCost) {
  let l = 0, r = 0;
  let res = 0, cost = 0;
  while (r < s.length) {
    cost += Math.abs(s[r].charCodeAt(0) - t[r].charCodeAt(0));
    if (cost <= maxCost) {
      res = Math.max(res, r - l + 1);
      r++;
    } else {
      while (cost > maxCost) {
        cost -= Math.abs(s[l].charCodeAt(0) - t[l].charCodeAt(0));
        l++
      }
      res = Math.max(res, r - l + 1);
      r++;
    }
  }
  return res;
};
