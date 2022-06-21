/**
 * @param {string} s
 * @return {number}
 * time: O(n)
 * space: O(1)
 */
var myAtoi = function(s) {
  let res = '', tag = 1, start = false;
  let set = new Set(['0','1','2','3','4','5','6','7','8','9']);
  for (let c of s) {
    if (!start) {
      if (c === ' ') continue;
      if (c === '-') tag = -1;
      else if (c === '+') tag = 1;
      else if (set.has(c)) res += c;
      else return 0;
      start = true;
    } else {
      if (set.has(c)) res += c;
      else break;
    }
  }
  res = Number(res) * tag;
  if (res < -Math.pow(2, 31)) res = -Math.pow(2, 31);
  if (res > Math.pow(2, 31) - 1) res = Math.pow(2, 31) - 1;
  return res;
};
