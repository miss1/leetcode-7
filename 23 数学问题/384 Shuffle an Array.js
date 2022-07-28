/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * @return {number[]}
 * 随机打乱，每次从剩下的数中随机取一个
 * time: O(n)
 * space: O(n)
 */
Solution.prototype.shuffle = function() {
  let res = [...this.nums];
  for (let i = 0; i < res.length; i++) {
    let index = Math.floor(Math.random() * (res.length - i) + i); // 从 [i, res.length - 1] 中随机取一个数，再与res[i]交换位置
    let t = res[index];
    res[index] = res[i];
    res[i] = t;
  }
  return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
