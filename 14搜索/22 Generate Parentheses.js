/**
 * @param {number} n
 * @return {string[]}
 * 递归，开始时第一个字符肯定是'('，递归添加括号直到左括号和右括号的数量都等于n。
 * 左括号的数量小于n时，添加左括号；左括号数量大于右括号并且右括号数量小于n时，添加右括号。
 * time: O(n)
 * space: O(n)
 */
var generateParenthesis = function(n) {
  let res = [];
  const recursion = function(str, left, right) {
    if (left === n && right === n) {
      res.push(str);
      return;
    }
    if (left < n) recursion(str + '(', left + 1, right);
    if (left > right && right < n) recursion(str + ')', left, right + 1);
  };
  recursion('(', 1, 0);
  return res;
};
