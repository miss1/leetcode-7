/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 * 先对数组进行排序，然后遍历nums，对于每一个数nums[i], 双指针指向i+1和数组尾部，两个指针向中间移动，直到找到边界
 * time: O(n²)
 * space: O(logn)
 */
var countFairPairs = function(nums, lower, upper) {
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let min = lower - nums[i], max = upper - nums[i];
    let l = i + 1, r = nums.length - 1;
    if (nums[l] > max || nums[r] < min) continue;
    while (l < r && (nums[l] < min || nums[r] > max)) {
      if (nums[l] < min) l++;
      if (nums[r] > max) r--;
    }
    let diff = r - l + 1;
    if (diff > 0) res += diff;
  }
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 * Binary search
 * 跟上面一样的思路，对于每一个数nums[i]，二分查找两个边界值
 * time: O(nlogn)
 * space: O(logn)
 */
var countFairPairs2 = function(nums, lower, upper) {
  nums.sort((a, b) => a - b);

  const findLowIndex = function(l, target) {
    let low = l, high = nums.length - 1;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (nums[mid] >= target) high = mid;
      else low = mid + 1;
    }
    return low;
  }

  const findUpperIndex = function(l, target) {
    let low = l, high = nums.length - 1;
    while (low < high) {
      let mid = low + Math.ceil((high - low) / 2);
      if (nums[mid] <= target) low = mid;
      else high = mid - 1;
    }
    return low;
  }

  let res = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let min = lower - nums[i], max = upper - nums[i];
    if (nums[i + 1] > max || nums[nums.length - 1] < min) continue;
    let l = findLowIndex(i + 1, min);
    let r = findUpperIndex(i + 1, max);
    let diff = r - l + 1;
    if (diff > 0) res += diff;
  }
  return res;
};