/**
 * @param {number[]} nums
 * @return {number}
 * 回溯找出数组的所有subset
 * time: O(2^n)
 * space: O(n)
 */
var subsetXORSum = function(nums) {
  let res = 0;
  const backTrack = function(idx, r, arr) {
    res += r;
    for (let i = idx; i < nums.length; i++) {
      arr.push(nums[i]);
      backTrack(i + 1, r ^ nums[i], arr);
      arr.pop();
    }
  };
  backTrack(0, 0, []);
  return res;
};
