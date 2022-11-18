/**
 * @param {number[]} nums
 * @return {number}
 * 跟33题类似，一半有序。二分查找，如果mid的值大于等于left，说明[left, mid] 这一段是有序的，接下来从这段中寻找。反之从另一段中寻找
 * 当left的值大于right的值时，说明当前这段已经是有序的，left就是最小值
 * time: O(logn)
 * space: O(1)
 */
var findMin = function(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (nums[left] < nums[right]) return nums[left];
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};