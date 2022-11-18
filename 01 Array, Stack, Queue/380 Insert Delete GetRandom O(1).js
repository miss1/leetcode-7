
var RandomizedSet = function() {
  this.m = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.m.get(val) === undefined) {
    this.arr.push(val);
    this.m.set(val, this.arr.length - 1);
    return true;
  }
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(this.m.get(val) !== undefined) {
    let index = this.m.get(val);
    let last = this.arr[this.arr.length - 1];
    this.arr[index] = last;
    this.m.set(last, index);
    this.arr.pop();
    this.m.delete(val);
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let index = Math.floor(Math.random() * this.arr.length);
  return this.arr[index];
};


/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/**
 * time: O(1)
 * space: O(n)
 * 数组
 * 利用数组记录值，用map记录值对应的下标，删除的时候将数组最后一位放到要删除的值的下标位置，再将最后一位pop出去
 */

