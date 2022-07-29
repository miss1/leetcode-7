/**
 * @param {number[]} nums
 * @return {number}
 * 要找数量最多（超过n/2）的数且这个数一定存在，则只需将不相等的数两两抵消掉，剩下的就一定是要求的数
 * time: O(n)
 * space: O(1)
 */
var majorityElement = function(nums) {
  let count = 0, res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) res = nums[i];
    let increase = nums[i] === res ? 1 : -1;
    count += increase;
  }
  return res;
};
