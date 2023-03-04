/**
 * @param {number[]} nums
 * @return {number[][]}
 * 全排列，回溯
 * time: O(n * n!)
 * space: O(n!)
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


/**
 * @param {number[]} nums
 * @return {number[][]}
 * 用hashmap存储已经记录的数字，取代result.includes
 */
var permute2 = function(nums) {
  let res = [];
  let set = new Set();
  const backTrack = function(arr) {
    if (arr.length === nums.length) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) continue;
      set.add(nums[i]);
      arr.push(nums[i]);
      backTrack(arr);
      const n = arr.pop();
      set.delete(n);
    }
  };
  backTrack([]);
  return res;
};
