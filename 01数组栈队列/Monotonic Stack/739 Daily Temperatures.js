/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 单调递增栈
 * time: O(n)
 * space: O(n)
 */
var dailyTemperatures = function(temperatures) {
  let result = [];
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    result[i] = 0;
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let peek = stack.pop();
      result[peek] = i - peek;
    }
    stack.push(i);
  }
  return result;
};