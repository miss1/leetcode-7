/**
 * @param {number[]} nums
 * @return {number[][]}
 * 回溯，先排序，再用set记录下已经得到的子集，防止出现重复
 * time: O(n * 2^n)
 * space: O(n)
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let set = new Set();
  const backTrack = function(arr, index) {
    if (!set.has(arr.join(','))) {
      res.push([...arr]);
      set.add(arr.join(','));
    }
    if (arr.length === nums.length) return;
    for (let i = index; i < nums.length; i++) {
      arr.push(nums[i]);
      backTrack(arr, i + 1);
      arr.pop();
    }
  };
  backTrack([], 0);
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 与78题类似
 * 遍历nums，逐个将每一个num添加到result的每一个数组中
 * eg: nums = [1,2,2]
 * i = 0时， result = [[]] -> [].push(1), result = [[], [1]], preIndex = 0
 * i = 1时， result = [[], [1]] -> [] + 2, [1] + 2 -> [2], [1,2], result = [[], [1], [2], [1,2]], preIndex = 2
 * i = 2时， result = [[], [1], [2], [1,2]] -> 2与前一个数相等，避免重复，从preIndex开始算起 -> [2,2], [1,2,2]
 * result = [[], [1], [2], [1,2], [2,2], [1,2,2]]
 * time: O(n * 2^n)
 * space: O(n)
 */
var subsetsWithDup2 = function(nums) {
  nums.sort((a, b) => a - b);
  let res = [[]];
  let preIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    let start = 0;
    if (i > 0 && nums[i] === nums[i - 1]) {
      start = preIndex;
    }
    let next = [...res];
    preIndex = res.length;
    for (let j = start; j < res.length; j++) {
      next.push([...res[j], nums[i]]);
    }
    res = next;
  }
  return res;
};