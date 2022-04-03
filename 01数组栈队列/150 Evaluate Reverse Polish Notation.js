/**
 * @param {string[]} tokens
 * @return {number}
 * time: O(n)
 * space: O(n)
 * 波兰表达式，用栈
 * 遇到数字就将数字压栈，遇到操作符，就将栈顶的两个元素取出计算，将计算结果再压入栈
 */
var evalRPN = function(tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    let op = tokens[i];
    if (op !== '+' && op !== '-' && op !== '*' && op !== '/') stack.push(op);
    else {
      let num1 = parseInt(stack.pop());
      let num2 = parseInt(stack.pop());
      if (op === '+') stack.push(num2 + num1);
      else if (op === '-') stack.push(num2 - num1);
      else if (op === '*') stack.push(num2 * num1);
      else if (op === '/') {
        let res = num2 / num1;
        res = res < 0 ? Math.ceil(res) : Math.floor(res);
        stack.push(res);
      }
    }
  }
  return stack.pop();
};