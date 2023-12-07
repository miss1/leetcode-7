/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 栈，用栈记录连续字符的个数，当栈顶的字符count等于k时，出栈
 * time: O(n)
 * space: O(n)
 */
var removeDuplicates = function(s, k) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push({val: s[i], count: 1});
      continue;
    }
    let p = stack[stack.length - 1];
    if (s[i] === p.val) {
      if (p.count + 1 === k) stack.pop();
      else p.count += 1;
    } else {
      stack.push({val: s[i], count: 1});
    }
  }
  let res = '';
  for (let c of stack) {
    res += c.val.repeat(c.count);
  }
  return res;
};