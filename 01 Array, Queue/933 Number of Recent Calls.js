/**
 * queue
 * 每次ping将t入栈，然后判断t和队首的差，将超出条件的队首出队
 * @constructor
 */
var RecentCounter = function() {
  this.queue = [];
  this.start = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t);
  while (t - this.queue[this.start] > 3000) {
    this.start++;
  }
  return this.queue.length - this.start;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */