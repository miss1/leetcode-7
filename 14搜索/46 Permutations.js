/**
 * @param {number[]} nums
 * @return {number[][]}
 * 全排列，回溯
 * time: O(n), n: 结果数组的长度
 * space: O(n)
 */
var permute = function(nums) {
  let res = [];
  const backTrack = function(result) {
    if (result.length === nums.length) {
      res.push([...result]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!result.includes(nums[i])) {
        result.push(nums[i]);
        backTrack(result);
        result.pop();
      }
    }
  };
  backTrack([]);
  return res;
};
