/**
 * @param {string} s
 * @return {string}
 * 双指针分别从头尾向中间移动。要判断回文，需要头尾相等
 * 如果l和r不相等，如果l更小，则替换r，如果l更大，则替换l。保证最后的结果是lexicographically smallest one
 * time: O(n)
 * space: O(n)
 */
var makeSmallestPalindrome = function(s) {
  let strs = s.split('');
  let l = 0, r = strs.length - 1;
  while (l < r) {
    if (strs[l] !== strs[r]) {
      if (strs[l] < strs[r]) strs[r] = strs[l];
      else strs[l] = strs[r];
    }
    l++;
    r--;
  }
  return strs.join('');
};