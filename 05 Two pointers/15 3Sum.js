/**
 * @param {number[]} nums
 * @return {number[][]}
 * 跟16题类似。先将数组排序，然后从第一个数开始循环，左指针指向当前数的下一个，右指针指向尾部。
 * 将三个数相加，大于target，右指针左移，小于target，左指针右移
 * 若和等于target，先循环跳过左右两边重复的数，再同时移动左右指针，重新求和计算
 * time: O(n²)
 * space: O(n)
 */
var threeSum = function(nums) {
  let res = [];
  nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break; // 因为数组nums是排好序的，当第一个数大于target，后面的数都是大于target的
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 跳过重复值
    let sum = 0;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        res.push([nums[i], nums[left], nums[right]]);
        // 跳过重复值
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        // 找到目标值时，同时移动两个指针，重新寻找
        left++;
        right--;
      }
    }
  }
  return res;
};
