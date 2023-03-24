/**
 * @param {string} s
 * @return {string[]}
 * 回溯backtrack
 * 一共需要插入三个dot，尝试将dot插入到所有可能的位置，判断截出来的数字是否有效
 */
var restoreIpAddresses = function(s) {
  let res = [];
  const backTrack = function(dots, str, index) {
    if (dots.length === 3) {
      let last = s.substring(dots[dots.length - 1]);
      if ((last.length > 1 && last[0] === '0') || Number(last) > 255) return;
      res.push(str.join('.') + '.' + last);
      return;
    }
    for (let i = index; i < s.length; i++) {
      let ch = dots.length === 0 ? s.substring(0, i) : s.substring(dots[dots.length - 1], i);
      if ((ch.length > 1 && ch[0] === '0') || Number(ch) > 255) continue;
      dots.push(i);
      str.push(ch);
      backTrack(dots, str, i + 1);
      dots.pop();
      str.pop();
    }
  };
  backTrack([], [], 1);
  return res;
};