/**
 * @param {number[]} nums
 * @return {number[]}
 * 先找到第一个大于等于0的值，设置一个右指针指向它，再设置一个左指针指向它前一个数，两个指针向两边移动
 * 每次比较两个指针的值的大小，取更小的那一个添加到res中
 * time: O(n)
 * space: O(n)
 */
var sortedSquares = function(nums) {
  let right = nums.findIndex((val) => val >= 0);
  let left = -1;
  if (right === -1) {
    left = nums.length - 1;
    right = nums.length;
  } else {
    left = right - 1;
  }
  let res = [];
  while (left >= 0 || right < nums.length) {
    let num1 = left >= 0 ? nums[left] * nums[left] : Infinity;
    let num2 = right < nums.length ? nums[right] * nums[right] : Infinity;
    if (num1 <= num2) {
      res.push(num1);
      left--;
    } else {
      res.push(num2);
      right++;
    }
  }
  return res;
};