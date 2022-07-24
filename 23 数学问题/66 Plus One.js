/**
 * @param {number[]} digits
 * @return {number[]}
 * 用栈，pop出数据加上进位后push进栈。
 * time: O(n)
 * space: O(n)
 */
var plusOne = function(digits) {
  let stack = [];
  let increment = 1;
  while (digits.length > 0) {
    let num = digits.pop(), sum = increment + num;
    if (sum >= 10) {
      stack.push(sum % 10);
      increment = 1;
    } else {
      stack.push(sum);
      increment = 0;
    }
  }
  if (increment === 1) stack.push(1);
  let res = [];
  while (stack.length > 0) res.push(stack.pop());
  return res;
};