/**
 * @param {string} s
 * @return {number}
 * 栈，遇到'('入栈。遇到')'出栈，并且判断pop出来的值t
 * 如果t是数字，说明是 (n) 情况，将( pop掉，push进新的值 n*2. 如果将( pop掉之后栈顶是数字m，说明是 (m)(n),则push进 m+n
 * 如果t是'('，如果栈顶是数字，说明是 (n)(), 将栈顶改为n+1； 如果栈顶是'('，说明是(), push进1
 * time: O(n)
 * space: O(n)
 */
var scoreOfParentheses = function(s) {
  let stack = [];
  for (let p of s) {
    if (p === '(') stack.push(p);
    else {
      let t = stack.pop();
      if (t === '(') {
        if (stack.length > 0 && stack[stack.length - 1] !== '(') stack[stack.length - 1] += 1; // (n)()
        else stack.push(1); // ()
      } else {
        stack.pop();
        if (stack.length > 0 && stack[stack.length - 1] !== '(') stack[stack.length - 1] += t * 2; // (m)(n)
        else stack.push(t * 2);  // (n)
      }
    }
  }
  return stack.pop();
};