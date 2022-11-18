/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 从有序的数列中查找某个数的位置
 * 二分查找，两个指针分别指向头和尾，取中间的节点center跟target比较大小
 * 若 center > target,则尾部的指针移动到center-1。center < target,则头部指针移动到center+1。若相等则center就是所求位置
 * time: O(logn)
 * space: O(1)
 */
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let center = Math.floor((right + left) / 2);
    if (nums[center] > target) right = center - 1;
    else if (nums[center] < target) left = center + 1;
    else return center;
  }
  return left;
};
