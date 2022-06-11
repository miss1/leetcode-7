/**
 * @param {number[]} nums
 * @return {number}
 * 异或，由题可知，完整的nums数组为[0, n]
 * eg. n=3 则完整的nums = [0,1,2,3]; 将所有的数跟它对应的index异或，(0^0)^(1^1)^(2^2)^(3^3) = 0;
 * 当缺少任意一个数比如2时：(0^0)^(1^1)^(2)^(3^3) = 2；所以将所有的数跟它对应的index异或就能得到缺少的那个数
 * 由于异或满足交换条件，所以nums中的顺序不影响结果
 * time: O(n)
 * space: (1)
 */
var missingNumber = function(nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ (nums[i] ^ i);
  }
  return res;
};
