/**
 * @param {number} x
 * @return {boolean}
 * 判断是否回文数字。在第7题的基础上，将数字反转，判断反转后的数字与原数字是否相等
 * time: O(log10(x))
 * space: O(1)
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let res = 0, num = x;
  while (num > 0) {
    let n = num % 10;
    num = Math.floor(num / 10);
    res = res * 10 + n;
  }
  return res === x;
};
