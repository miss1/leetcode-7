/**
 * @param {number[]} nums
 * @return {number}
 * f(n) = Math.max(f(n - 2) + nums[n], f(n - 1))
 * time: O(n)
 * space: O(1)
 */
var rob = function(nums) {
  let a = 0, b = 0;
  for (let i = 0; i < nums.length; i++) {
    let res = Math.max(a + nums[i], b);
    a = b;
    b = res;
  }
  return Math.max(a, b);
};
