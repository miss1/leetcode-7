/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 4 sum, 在3 sum的基础上再加一层循环
 * time: O(n的3次方)
 * space: O(1)
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];
  const twoSum = function(start, s1, s2) {
    let left = start, right = nums.length - 1;
    let t = target - s1 - s2;
    while (left < right) {
      let s = nums[left] + nums[right];
      if (s < t) left += 1;
      else if (s > t) right -= 1;
      else {
        res.push([s1, s2, nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left += 1;
        right -= 1;
      }
    }
  };
  for (let i = 0; i <= nums.length - 4; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j <= nums.length - 3; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      twoSum(j + 1, nums[i], nums[j]);
    }
  }
  return res;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 求k sum的值，在3sum的基础上，递归求k个数的sum，递归直到k等于2时，求出2 sum返回
 * time: O(n的k−1次方),
 * space: O(k)  递归栈
 */
var fourSum2 = function(nums, target) {
  nums.sort((a, b) => a - b);
  const twoSum = function(start, target) {
    let res = [];
    let left = start, right = nums.length - 1;
    while (left < right) {
      let s = nums[left] + nums[right];
      if (s < target) left += 1;
      else if (s > target) right -= 1;
      else {
        res.push([nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left += 1;
        right -= 1;
      }
    }
    return res;
  };
  const kSum = function(k, start, target) {
    if (k === 2) {
      return twoSum(start, target);
    }
    let res = [];
    for (let i = start; i <= nums.length - k; i++) {
      if (i !== start && nums[i] === nums[i - 1]) continue;
      let r = kSum(k - 1, i + 1, target - nums[i]);
      for (let j = 0; j < r.length; j++) {
        res.push([nums[i], ...r[j]]);
      }
    }
    return res;
  };
  return kSum(4, 0, target);
};