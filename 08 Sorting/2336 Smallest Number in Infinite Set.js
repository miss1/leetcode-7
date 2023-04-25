/**
 * 桶排序，循环查找最小值
 * @constructor
 * time: O(n)
 */
var SmallestInfiniteSet = function() {
  this.arr = new Array(1001).fill(0);
  for (let i = 1; i <= 1000; i++) {
    this.arr[i] = i;
  }
};

/**
 * @return {number}
 * time: O(n)
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  for (let i = 1; i <= 1000; i++) {
    if (this.arr[i] !== 0) {
      this.arr[i] = 0;
      return i;
    }
  }
  return null;
};

/**
 * @param {number} num
 * @return {void}
 * time: O(1)
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  this.arr[num] = num;
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */




/**
 * hashmap + heap
 * hashmap和heap存储再次添加回来的值，addBack时往hashmap和heap加入值
 * 在用一个current变量存储当前还没有pop过的数中最小的值
 * 当pop时，如果heap中有值，说明要pop的值在current和heap中任选一个，由于先前pop的数肯定更小，所以堆顶的值肯定更小，返回堆顶
 * 如果heap中没有值，直接返回current
 * @constructor
 */
var SmallestInfiniteSet2 = function() {
  this.set = new Set();
  this.heap = [];
  this.current = 1;
};

/**
 * @return {number}
 * time: O(1)
 */
SmallestInfiniteSet2.prototype.popSmallest = function() {
  let res = 0;
  if (this.heap.length > 0) {
    res = this.heap.pop();
    this.set.delete(res);
  } else {
    res = this.current;
    this.current += 1;
  }
  return res;
};

/**
 * @param {number} num
 * @return {void}
 * time: O(n)
 */
SmallestInfiniteSet2.prototype.addBack = function(num) {
  if (num >= this.current || this.set.has(num)) return;
  this.set.add(num);
  let l = 0, r = this.heap.length;
  while (l < r) {
    let mid = l + ((r - l) >> 1);
    if (this.heap[mid] < num) r = mid;
    else l = mid + 1;
  }
  this.heap.splice(l, 0, num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */