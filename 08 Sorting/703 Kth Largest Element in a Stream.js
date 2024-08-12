/**
 * @param {number} k
 * @param {number[]} nums
 * priority queue. 找第k大的值，建立一个优先队列即可
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = [];
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
};

/**
 * @param {number} val
 * @return {number}
 * time: O(n)
 */
KthLargest.prototype.add = function(val) {
  let index = this.findIndex(val);
  this.heap.splice(index, 0, val);
  return this.heap[this.k - 1];
};

/**
 * @param val
 * @returns {number}
 * time: O(logn)
 */
KthLargest.prototype.findIndex = function(val) {
  let low = 0, high = this.heap.length;
  while (low < high) {
    let mid = low + ((high - low) >> 1);
    if (this.heap[mid] < val) high = mid;
    else low = mid + 1;
  }
  return low;
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


/**
 * @param {number} k
 * @param {number[]} nums
 * PriorityQueue
 * 维持一个长度为k的最小pq，长度超过时删除堆顶（最小值）。这样pq里面的值永远是目前前k大的值
 * O(n)
 */
var KthLargest2 = function(k, nums) {
  const queue = new PriorityQueue({compare: (a, b) => a - b});
  for (let n of nums) {
    queue.enqueue(n);
    if (queue.size() > k) {
      queue.dequeue();
    }
  }
  this.k = k;
  this.queue = queue;
};

/**
 * @param {number} val
 * @return {number}
 * O(1)
 */
KthLargest2.prototype.add = function(val) {
  this.queue.enqueue(val);
  if (this.queue.size() > this.k) {
    this.queue.dequeue();
  }
  return this.queue.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */