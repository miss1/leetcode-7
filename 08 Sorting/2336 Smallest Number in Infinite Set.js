// time: O(n)
var SmallestInfiniteSet = function() {
  this.arr = new Array(1001).fill(0);
  for (let i = 1; i <= 1000; i++) {
    this.arr[i] = i;
  }
};

/**
 * @return {number}
 * time: O(n)
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  for (let i = 1; i <= 1000; i++) {
    if (this.arr[i] !== 0) {
      this.arr[i] = 0;
      return i;
    }
  }
  return null;
};

/**
 * @param {number} num
 * @return {void}
 * time: O(1)
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  this.arr[num] = num;
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */