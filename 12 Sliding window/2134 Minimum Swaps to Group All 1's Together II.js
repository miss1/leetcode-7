/**
 * @param {number[]} nums
 * @return {number}
 * 一般遇到array的首位相接circular问题，只要将array append到它自己后面组成一个两倍长的数组处理就行
 * 移动窗口，窗口的长度为nums中1的数量total
 * 每次移动窗口时记录当前窗口内1的个数，获取到最大值max，则需要交换的最小次数为total - max
 * time: O(n)
 * space: O(n)
 */
var minSwaps = function(nums) {
  const total = nums.reduce((acc, n) => n === 1 ? acc + 1 : acc, 0);
  const arr = [...nums, ...nums];
  let i = 0, j = 0;
  let max = 0, count = 0;
  while (j < arr.length) {
    if (j < total) {
      if (arr[j] === 1) {
        max++;
        count++;
      }
      j++;
    } else {
      if (arr[j++] === 1) count++;
      if (arr[i++] === 1) count--;
      max = Math.max(max, count);
    }
  }
  max = Math.max(max, count);
  return total - max;
};