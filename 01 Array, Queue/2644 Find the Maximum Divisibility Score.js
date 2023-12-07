/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 * 两层循环，逐个判断nums中有多少数能被divisors[i]整除，用map存储每个divisors的数量，避免重复计算
 * time: O(m*n)
 * space: O(n)
 */
var maxDivScore = function(nums, divisors) {
  let map = new Map();
  let res = 0, maxScore = -1;
  for (let i = 0; i < divisors.length; i++) {
    let score = 0;
    if (map.has(divisors[i])) score = map.get(divisors[i]);
    else {
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] >= divisors[i] && nums[j] % divisors[i] === 0) {
          score += 1;
        }
      }
      map.set(divisors[i], score);
    }
    if (score > maxScore) {
      res = divisors[i];
      maxScore = score;
    } else if (score === maxScore) {
      res = Math.min(res, divisors[i]);
    }
  }
  return res;
};