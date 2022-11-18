/**
 * @param {string} columnTitle
 * @return {number}
 * 一共有26个字母，所以逢26进位。从后往前遍历，先获取当前字母代表的数字，再计算出当前字母位于从右到左第几位n
 * 当前字母代表的数字为 num * 26的n次方
 * time: O(n)
 * space: O(1)
 */
var titleToNumber = function(columnTitle) {
  let res = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    let num = columnTitle.charCodeAt(i) - 64;
    let multiple = columnTitle.length - i - 1;
    res += num * Math.pow(26, multiple);
  }
  return res;
};
