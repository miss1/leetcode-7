/**
 * @param {string} s
 * @return {boolean}
 * 栈+哈希表
 * 遇到左括号时入栈，遇到右括号时出栈，从map中获取对应的符号做判断，不相符直接返回false。
 * 循环结束时判断stack长度，长度为0说明正好匹配
 * time: O(n)
 * space: O(n)
 */
var isValid = function(s) {
  let stack = [];
  let map = {')': '(', '}': '{', ']': '['};
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
      if (map[s[i]] !== stack.pop()) return false;
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};