/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 * 堆，构造优先队列，队列长度为k，最后返回队列就行
 * time: O(nk)
 * space: O(1)
 */
var kClosest = function(points, k) {
  let heap = [];

  let getDistance = function(p) {
    return p[0] * p[0] + p[1] * p[1];
  };

  let enqueue = function(val) {
    let low = 0, high = heap.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (getDistance(heap[mid]) > getDistance(val)) high = mid;
      else low = mid + 1;
    }
    heap.splice(low, 0, val);
    if (heap.length > k) heap.pop();
  };

  for (let i = 0; i < points.length; i++) {
    enqueue(points[i]);
  }

  return heap;
};