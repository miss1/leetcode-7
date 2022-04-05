
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop());
  }
  let res = this.stack2.pop();
  while (this.stack2.length > 0) {
    this.stack1.push(this.stack2.pop());
  }
  return res;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * 栈
 * time: O(n)
 * space: O(n)
 * 定义两个栈，pop的时候，将stack1的数据全部pop到stack2，返回stack2栈顶的值，再将stack2全部pop回stack1
 */