/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 滑动窗口。两个指针从头开始移动，用map记录滑动窗口中每个数字出现的次数，count记录满足条件的i，j对。
 * 当count >= k时说明当前窗口内容满足条件，此时移动左指针，并且从新计算count
 * 当count < k时说明不满足条件，移动右指针添加新的数，并且从新计算count
 * 数学知识：长度为n的数组，可以一共有 (n * (n - 1)) / 2 个子数组（排列组合）
 * 所以可以通过map记录的相同的数的数量，来计算count
 * time: O(n)
 * space: O(n)
 */
var countGood = function(nums, k) {
  let length = nums.length, map = new Map();
  map.set(nums[0], 1);
  let i = 0, j = 0, res = 0, count = 0;
  while (j < length) {
    if (count >= k) {
      res += length - j;
      if (map.get(nums[i]) === 1) {
        map.delete(nums[i]);
      } else {
        let n = map.get(nums[i]);
        map.set(nums[i], n - 1);
        // count -= (n * (n - 1)) / 2;
        // count += ((n - 1) * (n - 2)) / 2;
        count -= n - 1;
      }
      i++;
    } else {
      j++;
      if (map.has(nums[j])) {
        let n = map.get(nums[j]);
        map.set(nums[j], n + 1);
        // count -= (n * (n - 1)) / 2;
        // count += (n * (n + 1)) / 2;
        count += n;
      } else {
        map.set(nums[j], 1);
      }
    }
  }
  return res;
};