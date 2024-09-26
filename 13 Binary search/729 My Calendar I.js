
var MyCalendar = function() {
  this.arr = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 * 二分查找，寻找插入的位置，插入到对应的位置
 * time: O(n)
 * space: O(n)
 */
MyCalendar.prototype.book = function(start, end) {
  if (this.arr.length === 0) {
    this.arr.push([start, end]);
    return true;
  }
  let left = 0, right = this.arr.length;
  // 二分查找，O(logn)
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (this.arr[mid][0] >= end) right = mid;
    else if (this.arr[mid][1] <= start) left = mid + 1;
    else return false;
  }
  // O(n)
  this.arr.splice(left, 0, [start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */




var MyCalendar2 = function() {
  this.arr = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 * 两个stack
 * 逐个比较[start,end]和arr中的每一个值，找到对应的位置插入
 * time: O(n)
 * space: O(n)
 */
MyCalendar2.prototype.book = function(start, end) {
  if (this.arr.length === 0) {
    this.arr.push([start, end]);
    return true;
  }

  let tmp = [], tag = false;
  while (this.arr.length > 0) {
    const t = this.arr.pop();
    if (start >= t[1]) {
      this.arr.push(t);
      this.arr.push([start, end]);
      tag = true;
      break;
    }
    if (end > t[0]) {
      this.arr.push(t);
      tag = false;
      break;
    }

    tmp.push(t);
    if (this.arr.length === 0) {
      this.arr.push([start, end]);
      tag = true;
      break;
    }
  }
  while (tmp.length > 0) {
    this.arr.push(tmp.pop());
  }
  return tag;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */