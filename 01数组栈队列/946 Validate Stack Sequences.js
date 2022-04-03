/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * 栈
 * time: O(n)
 * space: O(n)
 */
var validateStackSequences = function(pushed, popped) {
  let stack = [];
  let i = 0, j = 0;
  while (i < pushed.length || j < popped.length) {
    if (stack.length === 0) {
      stack.push(pushed[i]);
      i++;
    } else {
      if (stack[stack.length - 1] === popped[j]) {
        stack.pop(popped[j]);
        j++;
      } else {
        if (i >= pushed.length) return false;
        stack.push(pushed[i]);
        i++;
      }
    }
  }
  return true;
};

// 循环遍历pushed, popped；stack栈顶的值和popped[j]相等时，stack出栈，否则stack取pushed[i]的值入栈