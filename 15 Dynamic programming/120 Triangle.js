/**
 * @param {number[][]} triangle
 * @return {number}
 * 动态规划，计算出到达每一层中的每个数的累计最小值。到达当前数的最小值等于当前数加上前一层的两个可选数中的更小值
 * 将计算得到的最小值更新到当前位置。最后返回triangle中最后一行的最小值即可
 * time: O(n(n+1)/2) = O(n²)  // triangle中的总个数， 1+2+3+4+....+n
 * space: O(1)
 */
var minimumTotal = function(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j - 1 < 0) triangle[i][j] += triangle[i-1][j];
      else if (j >= triangle[i-1].length) triangle[i][j] += triangle[i-1][j-1];
      else triangle[i][j] += Math.min(triangle[i-1][j-1], triangle[i-1][j]);
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
};

/**
 * @param {number[][]} triangle
 * @return {number}
 * 与上面一样的解法，只是引用额外空间，不会修改原数组
 * time: O(n²)
 * space: O(n)
 */
var minimumTotal2 = function(triangle) {
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
