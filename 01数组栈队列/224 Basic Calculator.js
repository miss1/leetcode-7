/**
 * @param {string} s
 * @return {number}
 * 栈
 * time: O(n)
 * space: O(n)
 * 与227类似，每当向栈中压入数字时，判断栈顶是否是'-', 不是则直接压入，否则压入该数字的负数
 * 当遇到')'时开始出栈，累加出栈的数字，直到遇到'('停止，将和压入栈中
 * 最后将stack中的所有数字相加
 */
var calculate = function(s) {
  let stack = [];
  let num = '';
  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) num += s[i];  //'-(2+3)'
    if(i === s.length - 1 || (s[i] !== ' ' && !isDigit(s[i]))) {
      if (num !== '') {
        let pre = stack.pop();
        num = Number(num);
        if (pre === '-') stack.push(-num);
        else {
          if (pre !== undefined ) stack.push(pre);
          stack.push(num);
        }
      }
      if (s[i] === '(' || s[i] === '-') stack.push(s[i]);
      if (s[i] === ')') {
        let n = stack.pop();
        let r = 0;
        while(n !== '(') {
          r += n;
          n = stack.pop();
        }
        let pre = stack.pop();
        if (pre === '-') stack.push(-r);
        else {
          if (pre !== undefined ) stack.push(pre);
          stack.push(r);
        }
      }
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