/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 * 贪心，先把nums排序，再三个一组分，如果任意一组内存在差值大于k，则return []
 * time: O(nlongn)
 * space: O(logn)
 */
var divideArray = function(nums, k) {
  nums.sort((a, b) => a - b);
  let res = [], arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 3 === 0) arr = [nums[i]];
    else {
      if (nums[i] - arr[0] > k) return [];
      arr.push(nums[i]);
      if (arr.length === 3) res.push([...arr]);
    }
  }
  return res;
};