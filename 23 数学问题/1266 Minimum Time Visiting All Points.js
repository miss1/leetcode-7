/**
 * @param {number[][]} points
 * @return {number}
 * 可以同时往x轴和y轴移动，所以只要求两个点x的差值和y的差值，取更大的就行
 * time: O(n)
 * space: o(1)
 */
var minTimeToVisitAllPoints = function(points) {
  let res = 0;
  for (let i = 1; i < points.length; i++) {
    let d1 = Math.abs(points[i][0] - points[i - 1][0]);
    let d2 = Math.abs(points[i][1] - points[i - 1][1]);
    res += Math.max(d1, d2);
  }
  return res;
};