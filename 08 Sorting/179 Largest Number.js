/**
 * @param {number[]} nums
 * @return {string}
 * 排序，按两个num拼起来的值排序
 * time: O(nlogn)
 * space: O(logn)
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => {
    const t1 = a + '' + b;
    const t2 = b + '' + a;
    return t2 > t1 ? 1 : -1;
  });
  if (nums[0] === 0) return '0';
  return nums.join('');
};