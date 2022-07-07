/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 三个指针，p1和cur指向头部，p2指向尾部
 * nums[cur] = 0：交换cur和p1, cur和p1右移一步
 * nums[cur] = 1：cur右移一步
 * nums[cur] = 2：交换cur和P2, p2左移一步
 * time: O(n)
 * space: O(1)
 */
var sortColors = function(nums) {
  let p1 = 0, p2 = nums.length - 1, cur = 0;
  const swap = function(i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };
  while (cur <= p2) {
    if (nums[cur] === 0) {
      swap(cur, p1);
      cur += 1;
      p1 += 1;
    } else if (nums[cur] === 1) {
      cur += 1;
    } else {
      swap(cur, p2);
      p2 -= 1;
    }
  }
};
