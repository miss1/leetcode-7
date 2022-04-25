/**
 * @param {number[]} nums
 * @return {number}
 * index 表示结果数组的当前位置，增加一个count参数，表示当前遍历到的数字的重复次数
 * 从i = 1开始遍历，当nums[i] 不等于 nums[i-1]时，说明nums[i]是第一个新的不重复的值，将这个值存储到index的位置
 * 当nums[i]等于nums[i-1]，说明值重复，当目前重复次数count小于k时，将i的值复制到index的位置，index+1
 * 重点在于，新数组的值重复次数不满k时，要将当前的nums[i]赋值给index，再移动index的位置
 * 此解可为k为任意值的解
 * time: O(n)
 * space: O(1)
 */
var removeDuplicates = function(nums) {
  let k = 2, count = 1, index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
      count = 1;
    } else {
      if (count < k) {
        nums[index] = nums[i];
        index++;
        count++
      }
    }
  }
  return index;
};
