/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 要让中位数等于k
 * 先将nums排序，设置中位数，如果中点之前的值大于中位数或者中点之后的值小于中位数，则需要将值改成等于中位数。确保数组的顺序为非递减
 * time: O(nlogn)
 * space: O(logn)
 */
var minOperationsToMakeMedianK = function(nums, k) {
  nums.sort((a, b) => a - b);
  let mid = Math.floor(nums.length / 2);
  let res = Math.abs(nums[mid] - k);
  let left = mid, right = mid;
  while (left > 0 && nums[left - 1] > k ) {
    res += nums[left - 1] - k;
    left--;
  }
  while (right < nums.length - 1 && nums[right + 1] < k) {
    res += k - nums[right + 1];
    right++;
  }
  return res;
};
