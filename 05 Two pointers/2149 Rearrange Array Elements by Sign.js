/**
 * @param {number[]} nums
 * @return {number[]}
 * 双指针一个指向奇数位一个指向偶数位(从0开始)。偶数位存储正数，奇数位存储负数
 * time: O(n)
 * space: O(n)
 */
var rearrangeArray = function(nums) {
  let res = new Array(nums.length).fill(0);
  let p = 0, n = 1;
  for (let num of nums) {
    if (num > 0) {
      res[p] = num;
      p += 2;
    } else {
      res[n] = num;
      n += 2;
    }
  }
  return res;
};
