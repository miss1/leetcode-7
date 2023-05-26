/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 需按照寻找两个数，两数之和为k
 * 先将nums排序，升序
 * 再双指针指向头尾，最小值加最大值，根据sum与k的关系移动两个指针
 * time: O(nlogn)
 * space: O(logn)
 */
var maxOperations = function(nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0, right = nums.length - 1;
  let res = 0;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === k) {
      left++;
      right--;
      res++;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};