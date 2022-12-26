/**
 * @param {number} num
 * @return {number}
 * 贪心，要差值最大，我们需要得到一个最大值和一个最小值
 * 对于最小值，从左到右，第一位一定是1，在保证第一位非0的情况下，将遇到的第一个数修改为0
 * 对于最大值，从左到右，将遇到的第一个非9的数修改为9
 * 用一个栈记录num中的每一位数字。再出栈判断每一个数字是否需要修改
 * time: O(n)
 * space: O(n)
 */
var maxDiff = function(num) {
  let stack = [];
  while (num > 0) {
    stack.push(num % 10);
    num = Math.floor(num / 10);
  }
  let first = stack.pop();
  let min = 1, max = 9;
  let a = null, b = null, tag = 0;
  if (first === 1) {
    b = 1
  } else if (first === 9) {
    a = 9
    tag = 1;
  } else {
    a = first;
    b = first;
    tag = 1;
  }
  while (stack.length > 0) {
    let n = stack.pop();
    if (a == null && n !== 0 && n !== 1) {
      a = n;
      min = min * 10 + tag;
    } else if (a === n){
      min = min * 10 + tag;
    } else {
      min = min * 10 + n;
    }
    if (b == null && n !== 9) {
      b = n;
      max = max * 10 + 9;
    } else if (b === n){
      max = max * 10 + 9;
    } else {
      max = max * 10 + n;
    }
  }
  return max - min;
};