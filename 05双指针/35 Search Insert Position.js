/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 从有序的数列中查找某个数的位置
 * 二分查找，两个指针分别指向头和尾，取中间的节点center跟target比较大小
 * 若 center > target,则尾部的指针移动到center。center < target,则头部指针移动到center。若相等则center就是所求位置
 * time: O(logn)
 * space: O(1)
 */
var searchInsert = function(nums, target) {
  if (nums[0] >= target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let center = left + Math.floor((right - left + 1) / 2);
    if (center === left || center === right) return center;
    if (nums[center] > target) right = center;
    else if (nums[center] < target) left = center;
    else return center;
  }
  return left;
};
