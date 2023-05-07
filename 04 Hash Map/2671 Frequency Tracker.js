/**
 * @constructor
 * 用hashmap进行add和delete操作，同时用一个数组记录Frequency，数组下标为Frequency,值为拥有该Frequency的number的个数
 */
var FrequencyTracker = function() {
  this.map = new Map();
  this.fre = new Array(100001).fill(0);
};

/**
 * @param {number} number
 * @return {void}
 * time: O(1)
 * space: O(n)
 */
FrequencyTracker.prototype.add = function(number) {
  if (this.map.has(number)) {
    let n = this.map.get(number);
    this.map.set(number, n + 1);
    this.fre[n] -= 1;
    this.fre[n + 1] += 1;
  } else {
    this.map.set(number, 1);
    this.fre[1] += 1;
  }
};

/**
 * @param {number} number
 * @return {void}
 * time: O(1)
 * space: O(n)
 */
FrequencyTracker.prototype.deleteOne = function(number) {
  if (this.map.has(number)) {
    let n = this.map.get(number);
    if (n === 1) {
      this.map.delete(number);
    } else {
      this.map.set(number, n - 1);
    }
    this.fre[n] -= 1;
    this.fre[n - 1] += 1;
  }
};

/**
 * @param {number} frequency
 * @return {boolean}
 * time: O(1)
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
  return this.fre[frequency] > 0;
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */