/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 将两个字符串当成数字相加，返回结果string
 * 从最后一位开始遍历两个字符串，逐个相加，如果值大于9，则记录进位。在下一次相加时加上进位
 * time: O(n)
 * space: O(1)
 */
var addStrings = function(num1, num2) {
  let res = '', add = 0;
  let i = num1.length - 1, j = num2.length - 1;
  while (i >= 0 || j >= 0) {
    const n1 = i >= 0 ? Number(num1[i]) : 0;
    const n2 = j >= 0 ? Number(num2[j]) : 0;
    const sum = n1 + n2 + add;
    add = sum >= 10 ? 1 : 0;
    res = sum % 10 + res;
    i--;
    j--;
  }
  if (add !== 0) res = add + res;
  return res;
};
