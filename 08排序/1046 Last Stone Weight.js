/**
 * @param {number[]} stones
 * @return {number}
 * 堆，优先队列。每次取队列的末尾两个数，相减后重新入队（两个值相等时不入队）
 * time: O(n²)
 * space: O(n)
 */
var lastStoneWeight = function(stones) {
  let p = new priorityQueue();
  for (let s of stones) p.enqueue(s);
  while (p.size() > 1) {
    let y = p.dequeue();
    let x = p.dequeue();
    if (x !== y) p.enqueue(y - x);
  }
  return p.size() === 0 ? 0 : p.dequeue();
};

class priorityQueue {
  constructor() {
    this.heap = [];
  }
  search(target) {
    let low = 0, high = this.size();
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (this.heap[mid] > target) high = mid;
      else low = mid + 1;
    }
    return low;
  }
  enqueue(val) {
    let index = this.search(val);
    this.heap.splice(index, 0, val);
  }
  dequeue() {
    return this.heap.pop();
  }
  size() {
    return this.heap.length;
  }
}