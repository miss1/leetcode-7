/**
 * @param {number[][]} intervals
 * @return {number[]}
 * 对于intervals，先记录好每一个item的idx，再排序
 * 然后对于每一个interval，二分查找第一个大于等于interval[1]的start，然后将它的idx存储到结果中
 * time: O(nlogn)
 * space: O(logn)
 */
var findRightInterval = function(intervals) {
  const arr = intervals.map((val, idx) => [...val, idx]);
  arr.sort((a, b) => a[0] - b[0]);

  let res = new Array(arr.length);
  for (let interval of arr) {
    const target = interval[1], idx = interval[2];
    let l = 0, r = intervals.length;
    while (l < r) {
      let mid = l + ((r - l) >> 1);
      if (target <= arr[mid][0]) r = mid;
      else l = mid + 1;
    }
    res[idx] = l >= arr.length ? -1 : arr[l][2];
  }
  return res;
};
