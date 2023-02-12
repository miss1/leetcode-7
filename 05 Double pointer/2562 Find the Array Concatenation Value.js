/**
 * @param {number[]} nums
 * @return {number}
 * 双指针分别指向头尾，拼接头尾数字，如果right数字有n位，则left需要乘以10的n次方再加上right
 * time: O(n)
 * space: O(1)
 */
var findTheArrayConcVal = function(nums) {
  let result = 0;
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let s = nums[right] + '';
    result += Math.pow(10, s.length) * nums[left] + nums[right];
    left += 1;
    right -= 1;
  }
  if (left === right) result += nums[left];
  return result;
};