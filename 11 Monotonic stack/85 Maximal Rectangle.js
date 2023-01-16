/**
 * @param {character[][]} matrix
 * @return {number}
 * 跟84题一个思路。
 * 对于矩阵的每一行，假设以当前行为底部，计算出每一列的高度（连续的1的高度），得到数组heights，然后就跟84题一模一样了
 * time: O(n*m) n为matrix.length，m为matrix[0].length
 * space: O(m)
 */
var maximalRectangle = function(matrix) {
  const largestRectangleArea = function(heights) {
    let area = 0;
    let stack = [-1];
    for (let i = 0; i < heights.length; i++) {
      while (stack[stack.length - 1] > -1 && heights[i] < heights[stack[stack.length - 1]]) {
        let h = heights[stack.pop()];
        let w = i - stack[stack.length - 1] - 1;
        area = Math.max(area, h * w);
      }
      stack.push(i);
    }
    while (stack.length > 1) {
      let h = heights[stack.pop()];
      let w = heights.length - stack[stack.length - 1] - 1;
      area = Math.max(area, h * w);
    }
    return area;
  }
  let res = 0;
  let h = new Array(matrix[0].length).fill(0);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '1') h[j] += 1;
      else h[j] = 0;
    }
    res = Math.max(res, largestRectangleArea(h));
  }
  return res;
};