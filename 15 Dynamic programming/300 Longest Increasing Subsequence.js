/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划，从末尾开始遍历，记录下当前位置开始的最长递增子串的个数
 * time: O(n²)
 * space: O(n)
 */
var lengthOfLIS = function(nums) {
  let length = nums.length;
  let sub = new Array(length).fill(1);
  let res = 0;
  for (let i = length - 1; i >= 0; i--) {
    let j = i + 1;
    while (j < length) {
      if (nums[i] < nums[j]) {
        sub[i] = Math.max(sub[i], sub[j] + 1);
      }
      j += 1;
    }
    res = Math.max(res, sub[i]);
  }
  return res;
};
