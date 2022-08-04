/**
 * 两个栈，一个stack存储栈的内容，一个orderStack存储当前stack中的最小值
 * time: O(1)
 * space: O(n)
 */

var MinStack = function() {
  this.stack = [];
  this.orderStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  let len = this.orderStack.length;
  if (len === 0 || val <= this.orderStack[len - 1]) this.orderStack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let n = this.stack.pop();
  if (n <= this.orderStack[this.orderStack.length - 1]) this.orderStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.orderStack[this.orderStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
