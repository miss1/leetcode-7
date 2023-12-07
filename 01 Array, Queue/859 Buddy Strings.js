/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * 数组
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

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings2 = function(s, goal) {
  if (s.length !== goal.length) return false;
  if (s === goal) return [...new Set(s)].length !== goal.length;
  let diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (diff.length < 2) diff.push(i);
      else return false;
    }
  }
  if (diff.length < 2) return false;
  return s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
};

// 比较两个字符串
// 1. 两个字符串完全相等并且存在重复字符串时，return true
// 2. 两个字符串只有两个字符不相等，且两个字符互换位置后两个字符串相等，return true