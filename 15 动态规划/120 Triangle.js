/**
 * @param {number[][]} triangle
 * @return {number}
 * 动态规划，计算出到达每一层中的每个数的累计最小值。到达当前数的最小值等于当前数加上前一层的两个可选数中的更小值
 * 用arr存储前一层中到达每个数的最小值
 * time: O(n), n为triangle中数字总个数
 * space: O(m), m为三角形中最后一层的长度
 */
var minimumTotal = function(triangle) {
  let arr = [triangle[0][0]];
  for (let i = 1; i < triangle.length; i++) {
    let current = [];
    for (let j = 0; j < triangle[i].length; j++) {
      if (j - 1 < 0) current[j] = triangle[i][j] + arr[j];
      else if (j >= arr.length) current[j] = triangle[i][j] + arr[j-1];
      else current[j] = triangle[i][j] + Math.min(arr[j-1], arr[j]);
    }
    arr = current;
  }
  return Math.min(...arr);
};
