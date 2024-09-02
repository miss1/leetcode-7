/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 * 当peek时不能移动指针，但是需要知道下一个的只。这时可以iterator.next()获取下一个值，存储到cache中
 * 当调用next时，优先从cache获取值
 */
var PeekingIterator = function(iterator) {
  this.iterator = iterator;
  this.cache = '';
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  if (!this.cache) this.cache = this.iterator.next();
  return this.cache;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  const r = this.cache || this.iterator.next();
  this.cache = '';
  return r;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  return this.cache || this.iterator.hasNext();
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */