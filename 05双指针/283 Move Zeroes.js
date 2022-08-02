/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 暴力解法，遍历nums，当遇到0时，再从当前值开始遍历一次，找到非0值，交换位置
 * time: O(n²)
 * space: O(1)
 */
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let tag = false;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
          let t = nums[j];
          nums[j] = nums[i];
          nums[i] = t;
          tag = true;
          break;
        }
      }
      if (!tag) break;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 双指针，两个指针一前一后，当前一个指针为0时，移动后一个指针找到非0值，交换两个指针的值
 * time: O(n)
 * space: O(1)
 */
var moveZeroes2 = function(nums) {
  let i = 0, j = 1;
  while (j < nums.length) {
    if (nums[i] === 0 && nums[j] !== 0) {
      let t = nums[j];
      nums[j] = nums[i];
      nums[i] = t;
      i++;
    } else if (nums[i] !== 0) {
      i++;
    }
    j++;
  }
};
