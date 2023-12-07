/**
 * @param {string} s
 * @return {string}
 * stack，判断括号是否成立，将不成立的括号改成''以便删除
 * stack判断括号：遇到'('入栈。遇到')'出栈，如果stack为空，说明')'为多余的
 * time: O(n)
 * space: O(n)
 */
var minRemoveToMakeValid = function(s) {
  let arr = s.split(''), stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') stack.push(i);
    else if (arr[i] === ')') {
      if (stack.length === 0) arr[i] = '';
      else stack.pop();
    }
  }
  while (stack.length > 0) arr[stack.pop()] = '';
  return arr.join('');
};