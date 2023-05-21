/**
 * @param {string} s
 * @return {number}
 * stack
 * 遍历s，判断栈顶字符和当前字符拼接之后是否等于'AB'或者'CD'，是的话则栈顶出栈，不是的话入栈
 * time: O(n)
 * space: O(n)
 */
var minLength = function(s) {
  let i = 0;
  let stack = [];
  while (i < s.length) {
    const t = stack.length > 0 ? stack[stack.length - 1] + s[i] : s[i];
    if (t === 'AB' || t === 'CD') {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    i++;
  }
  return stack.length;
};