/**
 * @param {string} s
 * @return {string}
 * stack
 * 遇到*就出栈，否则入栈
 * time: O(n)
 * space: O(n)
 */
var removeStars = function(s) {
  let stack = [];
  for (let c of s) {
    if (c === '*') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
};