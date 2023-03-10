/**
 * @param {number[][]} intervals
 * @return {number}
 * 优先队列，先将intervals按start排序。然后将end时间存进queue中
 * 新加入一个meeting时，如果start >= queue中最早结束的那个end，说明可以复用那个会议室，不用新加，先将最小end删除，再入队
 * 如果 start < queue中最早结束的那个end, 说明需要增加一个会议室，直接将end存进优先队列
 * 最后queue的长度就是需要的会议室数量
 * time: O(n*n)
 * space: O(n)
 */
var minMeetingRooms = function(intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let queue = [];
  for (let n of intervals) {
    if (queue.length > 0 && n[0] >= queue[queue.length - 1]) queue.pop();
    let l = 0, r = queue.length;
    while (l < r) {
      let mid = l + ((r - l) >> 2);
      if (queue[mid] < n[1]) r = mid;
      else l = mid + 1;
    }
    queue.splice(l, 0, n[1]);
  }
  return queue.length;
};


/**
 * @param {number[][]} intervals
 * @return {number}
 * 先将会议中的所有start和end单独提出来排序。再双指针遍历start和end
 * 当当前会议start时，查看当前有没有会议结束，有的话不用加会议室，反之添加会议室
 * eg: [[0,30],[5,10],[15,20]]
 * start: 0,  5,  15 -> i
 * end:   10, 20, 30 -> j
 * i = 0, j = 0 => 0开始，最早的会议要到10结束，新加会议室, i++
 * i = 1, j = 0 => 5开始，最早的会议要到10结束，新加会议室, i++
 * i = 2, j = 0 => 15开始，最早的会议要到10已经结束，不用添加会议室， i++, j++
 * time: O(nlogn)
 * space: O(n)
 */
var minMeetingRooms2 = function(intervals) {
  if (intervals.length === 0) return 0;
  let start = intervals.map(val => val[0]).sort((a, b) => a - b);
  let end = intervals.map(val => val[1]).sort((a, b) => a - b);
  let p1 = 0, p2 = 0;
  let usedRoom = 0;
  while (p1 < intervals.length) {
    if (start[p1] >= end[p2]) {
      usedRoom -= 1;
      p2 += 1;
    }
    usedRoom += 1;
    p1 += 1;
  }
  return usedRoom;
};