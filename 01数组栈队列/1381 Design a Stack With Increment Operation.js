/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.arr = [];
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.arr.length < this.maxSize) this.arr.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.arr.length === 0) return -1;
  else return this.arr.pop();
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  for (let i = 0; i < k; i++) {
    if (i >= this.arr.length) break;
    this.arr[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

/**
 * 栈
 * time: O(n)
 * space: O(n)
*/
