/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 归并排序，先二分，再合并两个有序数组，在合并数组的时候同时合并重叠区间
 * time: O(nlogn)
 * space: O(n)
 */
var merge = function(intervals) {
  // 合并有序数组，按interval中第一个数排序
  const sortOrderlyArray = function(a, b) {
    let i = 0, j = 0;
    let res = [];
    while (i < a.length || j < b.length) {
      let cur = [];
      if (i >= a.length || (j < b.length && a[i][0] > b[j][0])) {
        cur = b[j];
        j++;
      } else if (j >= b.length || (i < a.length && a[i][0] <= b[j][0])) {
        cur = a[i];
        i++;
      }
      if (res.length === 0) {
        res.push(cur);
        continue;
      }
      // 判断当前interval跟前一个interval是否有重叠区间，有的话合并
      // 因为是按interval的第一个数排序的，所以必有pre[0] <= cur[0]，所以还剩三种情况需要判断
      let pre = res.pop();
      if (cur[0] > pre[1]) {
        res.push(pre);
        res.push(cur);
      } else if (cur[1] > pre[1]) {
        res.push([pre[0], cur[1]]);
      } else {
        res.push(pre);
      }
    }
    return res;
  };
  // 二分
  const mergeSort = function(start, end) {
    if (start >= end) return [intervals[start]];
    let mid = start + ((end - start) >> 1);
    let left = mergeSort(start, mid);
    let right = mergeSort(mid + 1, end);
    return sortOrderlyArray(left, right);
  };
  return mergeSort(0, intervals.length - 1);
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 直接用sort方法排序，再遍历合并重叠区间
 * time: O(nlogn)
 * space: O(n)
 */
var merge2 = function(intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  for (let j = 1; j < intervals.length; j++) {
    let pre = res.pop(), cur = intervals[j];
    if (cur[0] > pre[1]) {
      res.push(pre);
      res.push(cur);
    } else if (cur[1] > pre[1]) {
      res.push([pre[0], cur[1]]);
    } else {
      res.push(pre);
    }
  }
  return res;
};

