/**
 * @param {number[]} nums
 * @return {boolean}
 * 将nums根据每个数字的1的数量分割成segments
 * 前一个segment的最大值不能大于后一个segment的最小值，否则返回true
 * time: O(n)
 * space: O(1)
 */
var canSortArray = function(nums) {
  const countSetBits = (num) => {
    let n = 0;
    while (num) {
      if (num & 1 === 1) n++;
      num = num >> 1;
    }
    return n;
  };
  let setBits = countSetBits(nums[0]);
  let i = 1, preMax = -Infinity, curMin = nums[0], curMax = nums[0];
  while (i < nums.length) {
    const n = countSetBits(nums[i]);
    if (n === setBits) {
      curMax = Math.max(curMax, nums[i]);
      curMin = Math.min(curMin, nums[i]);
    } else {
      if (curMin < preMax || nums[i] < preMax) return false;
      setBits = n;
      preMax = curMax;
      curMin = nums[i];
      curMax = nums[i];
    }
    i++;
  }
  return curMin >= preMax;
};