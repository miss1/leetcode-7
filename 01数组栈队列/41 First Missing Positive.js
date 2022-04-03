/**
 * @param {number[]} nums
 * @return {number}
 * 数组
 * time: O(n)
 * space: O(1)
 */
var firstMissingPositive = function(nums) {
  let i = 0;
  while (i < nums.length) {
    let temp = nums[i];
    if (nums[i] <= 0 || nums[i] >= nums.length || nums[i] === i + 1 || nums[i] === nums[temp - 1]) {
      i++;
    } else {
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) return j + 1;
  }
  return nums.length + 1;
};

// [3,4,7,-1,1,6]
// 遍历数组，使 nums[i] = i + 1, 数超过数组长度时保持不动。最后遍历数组，找到第一个nums[i] = i + 1的值，就是所求
// [7,4,3,-1,1,6]
// [7,-1,3,4,1,6]
// [1,-1,3,4,7,6]
// [1,-1,3,4,7,6]