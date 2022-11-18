/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 二分，求出两边的target的起点和终点
 * time: O(logn)
 * space: O(logn)
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1];
  const divider = function(start, end){
    if (start === end) return nums[start] === target ? [start, end] : [-1, -1];
    let mid = start + ((end - start) >> 1);
    let left = [-1, -1], right = [-1, -1];
    if (nums[mid] < target) right = divider(mid + 1, end);
    else if (nums[mid] > target) left = divider(start, mid);
    else {
      left = divider(start, mid);
      right = divider(mid + 1, end);
    }
    if (left[0] === -1 && right[1] === -1) return [-1, -1];
    if (left[0] === -1) return right;
    if (right[1] === -1) return left;
    return [left[0], right[1]];
  };
  return divider(0, nums.length - 1);
};