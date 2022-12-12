/**
 * @param {string} s
 * @return {boolean}
 * 先双指针一头一尾向中间移动，寻找所有可能的子串。
 * 再遍历所有可能的结果，看重复对应的次数后是否会等于s
 * time: O(n²)
 * space: O(n)
 */
var repeatedSubstringPattern = function(s) {
  let len = s.length;
  let left = 0, right = s.length - 1;
  let arr = [], str1 = '', str2 = '';
  while (left < right) {
    str1 += s[left];
    str2 = s[right] + str2;
    if (str1 === str2 && len % str1.length === 0) {
      arr.push(str1);
    }
    left++;
    right--;
  }
  for (let substr of arr) {
    if (substr.repeat(len / substr.length) === s) return true;
  }
  return false;
};