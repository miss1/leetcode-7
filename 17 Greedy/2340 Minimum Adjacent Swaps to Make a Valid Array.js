/**
 * @param {number[]} nums
 * @return {number}
 * 贪心，先遍历得到最大值和最小值的位置。再计算minIndex移动到0要多少步。maxIndex移动到len-1要多少步
 * 注意当minIndex > maxIndex时，计算重复了一步，要减去1
 * time: O(n)
 * space: O(1)
 */
var minimumSwaps = function(nums) {
  let minIndex = 0, maxIndex = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] < nums[minIndex]) {
      minIndex = i;
    }
    if (nums[i] >= nums[maxIndex]) {
      maxIndex = i;
    }
  }
  let res = (len - 1 - maxIndex) + minIndex;
  if (minIndex > maxIndex) res -= 1;
  return res;
};