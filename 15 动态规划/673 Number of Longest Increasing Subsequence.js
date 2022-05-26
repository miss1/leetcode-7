/**
 * @param {number[]} nums
 * @return {number}
 * LIS, 最长上升子序列
 * 从数组最后一个数开始倒序遍历，求出当前位置为起点时的最长子序列，并记录最长的数量
 * 当前位置的最长子序列长度取决于当前数字以及它后一个数，
 * 如果当前数字大于等于后一个数，非升序，LIS为它自己，长度为1
 * 如果当前数子小于后一个数，升序，LIS为它后一个数的LIS + 1(它自己)
 *          nums:(1, 3, 5, 4, 7)
 * length Of LIS:(4, 3, 2, 2, 1)
 *         count:(2, 2, 1, 1, 1)
 * time: O(n²)
 * space: O(n)
 */
var findNumberOfLIS = function(nums) {
  let res = []; // res = [[length, count]]
  for (let i = nums.length - 1; i >= 0; i--) {
    let t = [1, 1];
    for (let j = i + 1; j < nums.length; j++) {
      let next = res[nums.length - 1 - j];
      if (nums[i] < nums[j]) {
        if (next[0] + 1 > t[0]) t = [next[0] + 1, next[1]];
        else if (next[0] + 1 === t[0]) t[1] += next[1];
      }
    }
    res.push(t);
  }
  let num = 0, maxLength = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i][0] > maxLength) {
      maxLength = res[i][0];
      num = res[i][1];
    }else if (res[i][0] === maxLength) {
      num += res[i][1];
    }
  }
  return num;
};
