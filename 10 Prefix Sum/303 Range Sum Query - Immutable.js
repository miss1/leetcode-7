/**
 * @param {number[]} nums
 * 前缀和，数组记录前缀和，left到right区间的值等于两个前缀和相减
 * time: O(n)
 * space: O(n)
 */
var NumArray = function(nums) {
  this.prefixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    this.prefixSum.push(this.prefixSum[this.prefixSum.length - 1] + nums[i]);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 * time: O(1)
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.prefixSum[right + 1] - this.prefixSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */