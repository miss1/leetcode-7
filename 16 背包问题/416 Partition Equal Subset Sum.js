/**
 * @param {number[]} nums
 * @return {boolean}
 * DP 解法
 * 问题可以转化为求nums中是否存在子集使子集的和等于nums中所有元素和的一半
 * 从nums的尾部开始遍历，求出以当前元素为起点的数组，其所有可能的子集的和f(n)，存到set中
 * 前一个数为起点的所有子集和f(n-1) = f(n)中的每个值加上nums[n], 添加到set中
 * eg: nums = [1,3,11,5] -> 5开头时，子集和有两种可能f(n) = (5, 0), 11开头时，f(n-1) = f(n)中的每个数都加上11 = (16, 11, 5, 0)
 * time: O(Sum(nums))
 * space: O(Sum(nums))
 */
var canPartition = function(nums) {
  let target = 0;
  for (let i = 0; i < nums.length; i++) target += nums[i];
  target = target / 2;
  let set = new Set([0]);
  for (let i = nums.length - 1; i >= 0; i--) {
    let arr = [...set];
    for (let j = 0; j < arr.length; j++) {
      let sum = nums[i] + arr[j];
      if (sum === target) return true;
      set.add(sum);
    }
  }
  return set.has(target);
};
