/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 * Array.reduce
 * nums.reduce((accumulator, val) => fn(accumulator, val), init);
 */
var reduce = function(nums, fn, init) {
  let res = init;
  for (let num of nums) {
    res  = fn(res, num);
  }
  return res;
};