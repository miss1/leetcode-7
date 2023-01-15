/**
 * @param {number[]} nums
 * @return {number}
 * 遍历nums,求每个数字的element sum和digit sum，再相减
 * time: O(n)
 * space: O(1)
 */
var differenceOfSum = function(nums) {
  let res = 0;
  for (let num of nums) {
    let n = num, sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    res += sum - num;
  }
  return Math.abs(res);
};