
var MedianFinder = function() {
  this.heap = [];
};

/**
 * @param {number} num
 * @return {void}
 * time: O(n)
 */
MedianFinder.prototype.addNum = function(num) {
  let left = 0, right = this.heap.length;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (this.heap[mid] > num) right = mid;
    else left = mid + 1
  }
  this.heap.splice(left, 0, num);
};

/**
 * @return {number}
 * time: O(1)
 */
MedianFinder.prototype.findMedian = function() {
  let size = this.heap.length;
  if (size === 1) return this.heap[0];
  if (size % 2 === 0) {
    let mid = size / 2;
    return (this.heap[mid - 1] + this.heap[mid]) / 2;
  } else {
    let mid = Math.floor(size / 2);
    return this.heap[mid];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 * 其实就是实现PriorityQueue
 */
