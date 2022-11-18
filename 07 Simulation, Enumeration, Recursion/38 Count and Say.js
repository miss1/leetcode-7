/**
 * @param {number} n
 * @return {string}
 * 递归
 * time: O(nm), m为结果字符串str的长度
 * space: O(n), 递归调用栈
 */
var countAndSay = function(n) {
  const recursive = function(n) {
    if (n === 1) return '1';
    let str = recursive(n - 1);
    let s = str[0], count = 1, res = '';
    for (let i = 1; i < str.length; i++) {
      if (str[i] === s) count++;
      else {
        res += count + s;
        s = str[i];
        count = 1;
      }
    }
    return res + count + s;
  };
  return recursive(n);
};