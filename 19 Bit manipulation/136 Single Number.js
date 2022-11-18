/**
 * @param {number[]} nums
 * @return {number}
 * 异或，num ^ 0 = num, num ^ num = 0;
 * 将nums中的数全部进行异或操作，比如[4,1,2,1,2] -> 4^1^2^1^2 = 4 ^ 0 ^ 0 = 4; 两个相同的数字异或结果为0，剩下的数就是单独的数字
 * time: O(n)
 * space: O(1)
 */
var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
