/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 贪心，先将nums排序，再从1开始累加，将不在nums的数添加到结果中
 * time: O(nlogn)
 * space: O(logn)
 */
var minimalKSum = function(nums, k) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let i = 0, curr = 1;
  while (k > 0 && i < nums.length) {
    if (curr < nums[i]) {
      sum += curr;
      k--;
      curr++;
    } else {
      curr = nums[i] + 1;
      i++;
    }
  }
  while (k > 0) {
    sum += curr;
    k--;
    curr++;
  }
  return sum;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 贪心，先计算1-k的累加和。再遍历nums，nums中小于等于k的数说明不应该添加到结果中，要减去这些数，再记录好减去了多少个数，后需要再补上
 * 补的数，从k+1开始挑选不在nums中的数补
 * time: O(n)
 * space: O(n)
 */
var minimalKSum2 = function(nums, k) {
  let sum = (k * (k + 1)) / 2;
  let set = new Set(nums), more = 0;
  nums = [...set];
  for (let num of nums) {
    if (num <= k) {
      sum -= num;
      more += 1;
    }
  }
  while (more > 0) {
    k += 1;
    if (!set.has(k)) {
      sum += k;
      more--;
    }
  }
  return sum;
};