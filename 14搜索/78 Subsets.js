/**
 * @param {number[]} nums
 * @return {number[][]}
 * 子集
 * 跟排列组合一个道理，只是每次回溯的时候将当前的result数组存储到res中作为一个返回结果
 * time: O(n), n: 结果的总长度
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
