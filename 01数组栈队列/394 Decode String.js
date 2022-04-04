/**
 * @param {string} s
 * @return {string}
 * 栈
 * time: O(n)
 * space: O(n)
 */
var decodeString = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ']') {
      let c = '';
      let pre = stack.pop();
      while(pre !== '[') {
        c = pre + c;
        pre = stack.pop();
      }
      let n = '';
      let preN = stack.pop();
      while(!isNaN(preN)) {
        n = preN + n;
        preN = stack.pop();
      }
      stack.push(preN);
      stack.push(c.repeat(parseInt(n)));
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};

// 栈，遇到']'开始出栈，直到遇到'['时停止，此时获取到字符串c，再出栈获取重复数量n，c.repeat(parseInt(n))得到重复之后的数，入栈