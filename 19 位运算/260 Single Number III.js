/**
 * @param {number[]} nums
 * @return {number[]}
 * eg: [1,2,1,3,2,5]
 * 异或，num ^ 0 = num, num ^ num = 0; 先把所有数异或，得到结果 3 ^ 5 = 6 = 110
 * 求出低位第一个1，即 010，6 & -6 = 010；（-n等于n取反加1
 * 得到低位第一个1，说明在1这个位置，所求的两个数字有一个1一个0；两个答案3和5，肯定有一个跟010相与为0，另一个跟010相与为1
 * 以010为分界线，跟010相与值为0的分为一组，跟010相与值为1的分为一组，这样就把3，5隔开了
 * time: O(n)
 * space: O(1)
 */
var singleNumber = function(nums) {
  let n = 0;
  for (let i = 0; i < nums.length; i++) n = n ^ nums[i];
  n = n & -n;
  let res = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & n) === 0) res[0] = res[0] ^ nums[i];
    else res[1] = res[1] ^ nums[i];
  }
  return res;
};
