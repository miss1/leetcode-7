/**
 * @param {number[][]} points
 * @return {number}
 * 跟435类似。先将points按endx排序
 * 再遍历points，如果两个区间有重叠部分，则将当前区间更新为重叠的部分，
 * 如果没有重叠，res+1，当前区间更新为points[i]
 * time: O(nlogn)
 * space: O(logn)
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  let res = 1, t = points[0];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= t[1]) {
      t = [Math.max(points[i][0], t[0]), Math.min(points[i][1], t[1])];
    } else {
      res++;
      t = points[i];
    }
  }
  return res;
};