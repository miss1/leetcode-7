/**
 * @param {number[]} arr
 * @return {number}
 * 单调递减栈
 * time: O(n)
 * space: O(n)
 * 栈中存储每个块的最大值
 * 前一块的最大值不大于后一块的任意值，如果不是，要合并成同一块
 * 当前值小于栈顶元素时，说明当前元素是属于栈顶元素那一块，此时pop出栈顶元素，记录下当前块的最大值
 * 一直pop直到值小于等于当前值，再将当前块的最大值入栈
 * 最后返回栈的长度
 */
var maxChunksToSorted = function(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length > 0 && arr[i] < stack[stack.length - 1]) {
      let peek = stack.pop();
      while (stack.length !== 0 && stack[stack.length - 1] > arr[i]) stack.pop();
      stack.push(peek);
    } else {
      stack.push(arr[i]);
    }
  }
  return stack.length;
};