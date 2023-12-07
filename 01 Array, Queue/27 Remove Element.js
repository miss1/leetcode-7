/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 双指针，current指向当前结果的位置；index遍历nums，当遇到val时，index往后走，遇到非val时，将index的值赋值给current
 * time: O(n)
 * space: O(1)
 */
var removeElement = function(nums, val) {
  let index = 0, current = 0;
  while (index < nums.length) {
    if (nums[index] !== val) {
      nums[current] = nums[index];
      current++;
    }
    index++;
  }
  return current;
};
