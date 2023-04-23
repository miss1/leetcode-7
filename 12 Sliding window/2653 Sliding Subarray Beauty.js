/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 * 题目是要求判断滑动窗口内第x小的数是不是负数，是的话则返回该数，不是的话返回0
 * 由于：-50 <= nums[i] <= 50
 * 所以可以用数组记录下滑动窗口内的负数的个数，桶排序 count = [], 记录50个数，下标 1-50存储 -1 ~ -50的个数
 * 每次移动窗口前，判断当前窗口内的负数的个数是否大于等于x。
 * 只需反向遍历count(从小到大)，累计数量n, 当n >= x 时说明找到了第x小的数。
 * 若count内所有数相加还小于x，说明返回0
 * time: O(50 * n)
 * space: O(50)
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
  let count = new Array(51).fill(0);
  let res = [];
  let l = 0, r = 0;
  while (r < nums.length) {
    if (r < k) {
      if (nums[r] < 0) {
        count[-nums[r]] += 1;
      }
      r++;
    } else {
      if (nums[r] < 0) count[-nums[r]] += 1;
      if (nums[l] < 0) count[-nums[l]] -= 1;
      r++;
      l++;
    }
    if (r >= k) {
      let n = 0, beauty = 0;
      for (let i = 50; i >= 1; i--) {
        n += count[i];
        if (n >= x) {
          beauty = -i;
          break;
        }
      }
      res.push(beauty);
    }
  }
  return res;
};
