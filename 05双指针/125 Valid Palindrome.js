/**
 * @param {string} s
 * @return {boolean}
 * 双指针分别从头尾开始。遇到非字母数字就跳过，比较两个指针所指字符是否相等
 * time: O(n)
 * space: O(1)
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let i = 0, j = s.length - 1;
  while (i <= j) {
    let leftCode = s.charCodeAt(i);
    let rightCode = s.charCodeAt(j);
    if (!(leftCode >= 97 && leftCode <= 122) && !(leftCode >= 48 && leftCode <= 57)) {
      i++;
      continue;
    }
    if (!(rightCode >= 97 && rightCode <= 122) && !(rightCode >= 48 && rightCode <= 57)) {
      j--;
      continue;
    }
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};
