/**
 * @param {number[]} heights
 * @return {number}
 * 单调递减栈。当前元素小于栈顶元素时，说明长方形宽度不能再增加了，出栈，并计算高度为该元素时的长方形面积
 * 出栈的元素，会大于它前一个元素以及当前元素，所以它的矩形宽度可以用当前元素的下标减去它前一个元素的下标再加1来计算
 * time: O(n)
 * space: O(n)
 */
var largestRectangleArea = function(heights) {
  let res = 0;
  let stack = [-1];
  for (let i = 0; i < heights.length; i++) {
    while (stack[stack.length - 1] > -1 && heights[i] < heights[stack[stack.length - 1]]) {
      let h = heights[stack.pop()];
      let w = i - stack[stack.length - 1] - 1;
      res = Math.max(res, h * w);
    }
    stack.push(i);
  }
  while (stack.length > 1) {
    let h = heights[stack.pop()];
    let w = heights.length - stack[stack.length - 1] - 1;
    res = Math.max(res, h * w);
  }
  return res;
};