
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
