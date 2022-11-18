/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 找第k大的值，用优先队列，限定优先队列的长度为k，队列中保存前k大的值，最后返回队列的最后一个值即可
 * time: O(nk)
 * space: o(k)
 */
var findKthLargest = function(nums, k) {
  let p = new PriorityQueue(k);
  for (let i = 0; i < nums.length; i++) {
    p.enqueue(nums[i]);
  }
  return p.dequeue();
};

class PriorityQueue {
  constructor (k) {
    this.heap = [];
    this.k = k;
  }
  // time: O(logk)
  search(target) {
    let low = 0, high = this.heap.length;
    while (low < high) {
      let mid = ((high - low) >> 1) + low;
      if (this.heap[mid] < target) high = mid;
      else low = mid + 1;
    }
    return low;
  }
  // time: O(k)
  enqueue(val) {
    let index = this.search(val);
    this.heap.splice(index, 0, val);
    if (this.size() > this.k) this.dequeue();
  }

  dequeue() {
    return this.heap.pop();
  }

  size() {
    return this.heap.length;
  }
}
