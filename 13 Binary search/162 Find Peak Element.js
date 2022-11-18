/**
 * @param {number[]} nums
 * @return {number}
 * 遍历nums查找
 * time: O(n)
 * space: O(1)
 */
var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let pre = i - 1 < 0 ? -Infinity : nums[i - 1];
    let next = i + 1 >= nums.length ? -Infinity : nums[i + 1];
    if (nums[i] > pre && nums[i] > next) return i;
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 二分查找峰顶。如果mid不是峰顶，有三种情况
 * 1.mid大于前一个数，说明当前是上升趋势，峰顶一定在mid之后
 * 2.mid大于后一个数，说明当前是下降趋势，峰顶一定在mid之前
 * 3.mid是峰底，则mid之前之后都存在峰顶
 * time: O(logn)
 * space O(1)
 */
var findPeakElement2 = function(nums) {
  let left = 0, right= nums.length - 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    let pre = mid - 1 < 0 ? -Infinity : nums[mid - 1];
    let next = mid + 1 >= nums.length ? -Infinity : nums[mid + 1];
    if (nums[mid] > pre && nums[mid] > next) return mid;
    if (nums[mid] > pre) left = mid + 1;
    else right = mid - 1;
  }
  return left
};
