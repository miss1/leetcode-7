/**
 * @param {number[]} nums
 * @return {number[]}
 * 一个set存储，nums中从左到右遍历的num，并存储distinct elements的数量到left数组对应下标中
 * 另一个set存储，nums中从右到左遍历的num，并存储distinct elements的数量到right数组对应下标中
 * 最后两个数组中的值相减即可
 * time: O(n)
 * space: O(n)
 */
var distinctDifferenceArray = function(nums) {
  let res = [], n = nums.length;
  let left = [1], right = new Array(n).fill(0);
  let setl = new Set([nums[0]]);
  let setr = new Set();
  for (let i = 1; i < n; i++) {
    left[i] = setl.has(nums[i]) ? left[i - 1] : left[i - 1] + 1;
    right[n - 1 - i] = setr.has(nums[n - i]) ? right[n - i] : right[n - i] + 1;
    setl.add(nums[i]);
    setr.add(nums[n - i]);
  }
  for (let i = 0; i < n; i++) {
    res[i] = left[i] - right[i];
  }
  return res;
};