/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * time: O(n)
 * space: O(n)
 */
var buddyStrings = function(s, goal) {
  let arr = {};
  if (s.length !== goal.length) return false;
  let differ1 = -1, differ2 = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (differ1 === -1) differ1 = i;
      else if (differ2 === -1) differ2 = i;
      else return false;
    }
    if (arr != null) {
      if (arr.hasOwnProperty(s[i])) arr = null
      else arr[s[i]] = true;
    }
  }
  if (differ1 === -1 && differ2 === -1) return arr == null;
  if (differ2 === -1) return false;
  return s[differ1] === goal[differ2] && s[differ2] === goal[differ1];
};

// 比较两个字符串
// 1. 两个字符串完全相等并且存在重复字符串时，return true
// 2. 两个字符串只有两个字符不相等，且两个字符互换位置后两个字符串相等，return true