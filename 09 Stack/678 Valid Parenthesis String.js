/**
 * @param {string} s
 * @return {boolean}
 * stack。遇到左括号入栈，右括号出栈，遇到*也可以出栈。记录下当前三个符号的数量
 * 当 l + star < r 时说明右括号多了，false
 * 最后stack为空说明true
 * time: O(n)
 * space: O(n)
 */
var checkValidString = function(s) {
  let l = 0, r = 0, star = 0;
  let stack = [];
  for (let c of s) {
    if (c === '(') {
      l++;
      stack.push('(');
    }
    if (c === '*') {
      star++;
      stack.pop();
    }
    if (c === ')') {
      r++;
      if (l + star < r) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 * 跟上面一样的思路
 * greedy. 记录当前需要右括号的最大值和最小值
 * eg: (*(   此时最少需要 cmin = 1 个右括号，最多需要 cmax = 3个右括号。
 * 当cmax小于0时，说明此时右括号数量过多，return false
 * 遍历结束时 cmin = 0 说明是true
 * time: O(n)
 * space: O(1)
 */
var checkValidString2 = function(s) {
  let cmin = 0, cmax = 0;
  for (let c of s) {
    if (c === '(') {
      cmin += 1;
      cmax += 1;
    }
    if (c === '*') {
      cmin = Math.max(cmin - 1, 0);
      cmax += 1;
    }
    if (c === ')') {
      cmin = Math.max(cmin - 1, 0);
      cmax -= 1;
    }
    if (cmax < 0) return false;
  }
  return cmin === 0;
};