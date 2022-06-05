/**
 * @param {number[][]} intervals
 * @return {number}
 * 先将intervals按end排序。最终的intervals是一个递增的序列，排序后end已经就位，只要把start小于前一个end的数去掉就行
 * time: O(nlogn)
 * space: O(n)
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a,b) => a[1] - b[1]);
  let end = intervals[0][1], count = 1;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      count++;
      end = intervals[i][1];
    }
  }
  return intervals.length - count;
};
