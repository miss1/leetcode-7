/**
 * @param {number[]} nums
 * @return {boolean}
 * 贪心，从数组的尾部开始，数组最后一个数为lastPosition，判断从它前一个数能否到达当前位置，若可以，更新lastPosition；若不可以则继续往前找
 * 若最后lastPosition位置走到了0，则说明从0的位置能走到最后
 * time: O(n)
 * space: O(1)
 */
var canJump = function(nums) {
  let lastPosition = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= lastPosition) lastPosition = i;
  }
  return lastPosition === 0
};