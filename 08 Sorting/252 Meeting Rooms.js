/**
 * @param {number[][]} intervals
 * @return {boolean}
 * 判断区间之间有没有交集
 * 先将intervals按start排序，再判断后一个的start是否小于前一个的end
 * time: O(nlogn)
 * space: O(logn)
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) return false;
  }
  return true;
};