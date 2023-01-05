/**
 * @param {number} columnNumber
 * @return {string}
 * 规则：800 = 'ADT'; 800 = 1(A)*(26^2) + 4(D)*(26^1) + 20(T)*(26^0)
 * time: O(n)
 * space: O(1)
 */
var convertToTitle = function(columnNumber) {
  let res = '', p = 1;
  while(columnNumber > 0) {
    let n = columnNumber % Math.pow(26, p);
    if (n === 0) {
      res = 'Z' + res;
      columnNumber = columnNumber - Math.pow(26, p);
    } else {
      // 将数字转成对应的字符（ascii）
      res = String.fromCharCode(64 + (n / Math.pow(26, p - 1))) + res;
      columnNumber = columnNumber - n;
    }
    p += 1;
  }
  return res;
};