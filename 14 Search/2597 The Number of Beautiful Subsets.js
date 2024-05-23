/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 暴力解法，遍历nums，记录以当前i为结尾时所有的满足条件的子集
 * 对于nums[i], 遍历 i-1时的子集，逐个将nums[i]添加进去看是否满足条件
 * time: O(n * n * 2^n)
 * space: O(2^n)
 */
var beautifulSubsets = function(nums, k) {
  let arr = [[nums[0]]];
  // O(n)
  for (let i = 1; i < nums.length; i++) {
    let next = [[nums[i]]];
    // arr每次都会边长，最长为 2^n
    for (let item of arr) {
      let t = true
      // O(n)
      for (let n of item) {
        if (Math.abs(nums[i] - n) === k) {
          t = false;
          break;
        }
      }
      if (t) next.push([...item, nums[i]]);
    }
    arr = arr.concat(next);
  }
  return arr.length
};
