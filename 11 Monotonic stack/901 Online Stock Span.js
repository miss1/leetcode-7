var StockSpanner = function() {
  this.stack = [];
  this.arr = [];
  this.index = 0;
};

/**
 * @param {number} price
 * @return {number}
 * 跟739题类似。用arr存储所有的price，单调栈存储降序的price的下标
 * 当当前price大于等于栈顶的price时出栈，直到栈顶大于当前price，然后计算两个price的下标差
 * time: (n)
 * space: O(n)
 */
StockSpanner.prototype.next = function(price) {
  this.arr.push(price);
  while (this.stack.length > 0 && this.arr[this.stack[this.stack.length - 1]] <= price) {
    this.stack.pop();
  }
  let peek = this.stack.length > 0 ? this.stack[this.stack.length - 1] : -1;
  this.stack.push(this.index);
  return this.index++ - peek;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */