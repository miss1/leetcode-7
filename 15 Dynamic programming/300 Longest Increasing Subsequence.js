/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划，从末尾开始遍历，记录下当前位置开始的最长递增子串的个数
 * time: O(n²)
 * space: O(n)
 */
var lengthOfLIS = function(nums) {
  const n = nums.length;
  let dp = new Array(n).fill(1);
  let res = 1;
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] < nums[j]) dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 * greedy + binary search
 * eg: nums = [2, 6, 8, 3, 4, 5, 1]
 * > Let pick the first element, sub = [2].
 * > 6 is greater than previous number, sub = [2, 6]
 * > 8 is greater than previous number, sub = [2, 6, 8]
 * > 3 is less than previous number, so we can't extend the subsequence sub. We need to find the smallest number >= 3 in sub, it's 6. Then we overwrite it, now sub = [2, 3, 8].
 * > 4 is less than previous number, so we can't extend the subsequence sub. We overwrite 8 by 4, so sub = [2, 3, 4].
 * > 5 is greater than previous number, sub = [2, 3, 4, 5].
 * > 1 is less than previous number, so we can't extend the subsequence sub. We overwrite 2 by 1, so sub = [1, 3, 4, 5].
 * Finally, length of the longest increase subsequence = len(sub) = 4.
 * time: O(nlogn)
 * space: O(n)
 */
var lengthOfLIS2 = function(nums) {
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > arr[arr.length - 1]) arr.push(nums[i]);
    else {
      let l = 0, r = arr.length;
      while (l < r) {
        let mid = l + ((r - l) >> 1);
        if (arr[mid] >= nums[i]) r = mid;
        else l = mid + 1;
      }
      arr[l] = nums[i];
    }
  }
  return arr.length;
};
