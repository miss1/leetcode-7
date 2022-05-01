/**
 * @param {number[]} nums
 * @return {number[][]}
 * 全排列，回溯，关键在于怎么去除重复项
 * 先将数组nums排序，当遍历完一个数的所有情况，开始遍历下一个数时，判断这个数是否跟前一个数相等，若相等，则重复了，跳过
 * eg: [1,1,2], 遍历完a[0]为开头的所有情况，开始遍历a[1]为开头的情况，此时a[1] = a[0]，则跳过
 * time: O(n), n: 结果数组的长度
 * space: O(n)
 */
var permuteUnique = function(nums) {
  let res = [];
  let list = [];
  nums.sort((a,b) => { return a - b; })
  const backTrack = function(result) {
    if (result.length === nums.length) {
      res.push([...result]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (list.includes(i)) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !list.includes(i - 1)) continue;
      result.push(nums[i]);
      list.push(i);
      backTrack(result);
      result.pop();
      list.pop();
    }
  };
  backTrack([]);
  return res;
};
