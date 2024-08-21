/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 1. 右移的步数为 k % nums.length, (nums移动nums.length为一个循环)
 * 2. 移动k步，则右半部分为 (0, nums.length - step - 1), 左半部分为 (nums.length - step, nums.length - 1)
 * 3. 先将两部分数组reverse。再将整个nums reverse
 * eg: nums = [1,2,3,4,5,6,7], k = 3
 * -> 1 2 3 4 - 5 6 7 -> 4 3 2 1 - 7 6 5 -> 5671234
 * time: O(n)
 * space: O(1)
 */
var rotate = function(nums, k) {
  const step = k % nums.length;

  const swap = (l, r) => {
    while (l < r) {
      const t = nums[l];
      nums[l] = nums[r];
      nums[r] = t;
      l++;
      r--;
    }
  };

  swap(0, nums.length - step - 1);
  swap(nums.length - step, nums.length - 1);

  nums.reverse();
};