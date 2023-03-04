/**
 * @param {number[]} nums
 * @return {number[][]}
 * 子集
 * 跟排列组合一个道理，只是每次回溯的时候将当前的result数组存储到res中作为一个返回结果
 * time: O(n * 2^n), n: 结果的总长度
 * space: O(n)
 */
var subsets = function(nums) {
  let res = [];
  const backTrack = function(result, index) {
    res.push([...result]);
    if (index === nums.length) return;
    for (let i = index; i < nums.length; i++) {
      result.push(nums[i]);
      backTrack(result, i + 1);
      result.pop();
    }
  };
  backTrack([], 0);
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 遍历nums，逐个将每一个num添加到result的每一个数组中
 * eg: nums = [1,2,3]
 * num = 1时， result = [[]] -> [].push(1), result = [[], [1]]
 * num = 2时， result = [[], [1]] -> [] + 2, [1] + 2 -> [2], [1,2], 将结果添加到res中
 * num = 3时， result = [[], [1], [2], [1,2]] -> [3], [1,3], [2,3], [1,2,3]
 * time: O(n * Math.pow(2,n))
 * space: (Math.pow(2,n))
 */
var subsets2 = function(nums) {
  let result = [[]];
  for (let num of nums) {
    let newSubsets = [];
    // 1 * 2 * 2...
    for (let curr of result) {
      newSubsets.push([...curr, num]);
    }
    for (let curr of newSubsets) {
      result.push(curr);
    }
  }
  return result;
};
