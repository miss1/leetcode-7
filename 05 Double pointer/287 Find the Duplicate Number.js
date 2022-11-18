/**
 * @param {number[]} nums
 * @return {number}
 * 跟142题，寻找环的入口其实是同一题
 * 可以将nums数组看成是一个链表
 * 比如 a = [1,3,4,2,2] 可以转化成链表 1(a[0]) -> 3(a[1]) -> 2(a[3]) -> 4(a[2]) -> 2(a[4]) -> 4(a[2])
 * 之后就是快慢指针求环的入口的解法了
 * time O(n)
 * space O(1)
 */
var findDuplicate = function(nums) {
  let slow = nums[0], fast = nums[0];
  let count = 0;
  while (fast < nums.length && nums[fast] < nums.length) {
    slow = nums[slow];
    if (count === 0) fast = nums[nums[fast]];
    else fast = nums[fast];
    if (slow === fast) {
      if (fast === nums[0]) return fast;
      if (count === 0) {
        fast = nums[0];
        count++;
      } else {
        return fast;
      }
    }
  }
  return null;
};
