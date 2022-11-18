/**
 * @param {string} s
 * @return {number}
 * 栈
 * time: O(n)
 * space: O(n)
 * 用一个符号变量op记录数字前面的符号，当遍历到新数字时，判断它的符号是什么
 * 如果是乘除，就和前一个数字做运算并入栈
 * 如果是加，则直接入栈该数字，如果是减，则入栈该数字的负数。最后将stack中的所有数字相加
 */
var calculate = function (s) {
  let num = '', op = '+';
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) num  += s[i];
    if (i === s.length - 1 || (s[i] !== ' ' && !isDigit(s[i]))) {
      num = Number(num);
      if (op === '+') stack.push(num);
      else if (op === '-') stack.push(-num);
      else if (op === '*') stack.push(stack.pop() * num);
      else if (op === '/') {
        let n = stack.pop() / num;
        stack.push(n < 0 ? Math.ceil(n) : Math.floor(n));
      }
      op = s[i];
      num = '';
    }
  }
  let res = 0;
  while (stack.length !== 0) {
    res += stack.pop();
  }
  return res;
};

let isDigit = (val) => val >= '0' && val <= '9';