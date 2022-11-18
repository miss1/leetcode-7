/**
 * @param {number[]} nums
 * @return {number}
 * index 表示结果数组的当前位置
 * 遍历nums，当nums[i] 不等于 nums[i+1]时，说明nums[i+1]是第一个新的不重复的值，将这个值存储到index的位置
 * 最后返回index值，index值就是结果数组的长度
 * time: O(n)
 * space: O(1)
 */
var removeDuplicates = function(nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};
