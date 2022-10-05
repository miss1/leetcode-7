/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * 一次遍历，判断newInterval跟interval是否有交集，有的话进行合并
 * time: O(n)
 * space:O(n)
 */
var insert = function(intervals, newInterval) {
  let res = [];
  if (intervals.length === 0) return [newInterval];
  for (let interval of intervals) {
    if (newInterval) {
      if (newInterval[1] < interval[0]) {
        res.push(newInterval);
        res.push(interval);
        newInterval = null;
      } else if (newInterval[1] <= interval[1]) {
        res.push([Math.min(newInterval[0], interval[0]), interval[1]]);
        newInterval = null;
      } else if (newInterval[0] <= interval[1]) {
        newInterval[0] = Math.min(newInterval[0], interval[0]);
      } else {
        res.push(interval);
      }
    } else {
      res.push(interval);
    }
  }
  if (newInterval) res.push(newInterval);
  return res;
};