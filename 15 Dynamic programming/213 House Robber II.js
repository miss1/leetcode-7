/**
 * @param {number[]} nums
 * @return {number}
 * f(n) = Math.max(f(n - 2) + nums[n], f(n - 1))
 * 房子头尾相连，说明头和尾不能同时存在，将所有房子分成两部分，nums(0, length-1) 和 nums(1, length)
 * 分别求出两部分的值，取更大的
 * time: O(n)
 * space: O(1)
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0];
  let a = 0, b = 0;
  let res = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let r = Math.max(a + nums[i], b);
    a = b;
    b = r;
  }
  res = Math.max(a, b);
  a = 0;
  b = 0;
  let res2 = 0;
  for (let i = 1; i < nums.length; i++) {
    let r = Math.max(a + nums[i], b);
    a = b;
    b = r;
  }
  res2 = Math.max(a, b);
  return Math.max(res, res2);
};
