/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 单调递增栈，在pop k个数之前保持栈是单调增。因为数字越靠前占的比重越大，所以要移除靠前的数字较大的数(我也没整明白，说了个寂寞
 * time: O(n)
 * space: O(n)
 */
var removeKdigits = function(num, k) {
  let stack = [];
  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  let res = '';
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === '0' && res === '') continue;
    res += stack[i];
  }
  return res || '0';
};



/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 回溯，类似于从num中去掉k个数，再做组合，取值最小的组合。会超时
 */
var removeKdigits2 = function(num, k) {
  let res = Infinity;
  let backTrack = function(str, start) {
    if (str.length === num.length - k) {
      res = Math.min(Number(str.join('')), res);
      return;
    }
    for (let i = start; i < num.length; i++) {
      str.push(num[i]);
      backTrack(str, i + 1);
      str.pop();
    }
  };
  backTrack([], 0);
  return res + '';
};