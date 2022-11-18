/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 先将数组排序，然后从第一个数开始循环，左指针指向当前数的下一个，右指针指向尾部。
 * 将三个数相加，如果和大于target，说明和需要减少，右指针往左移动一个；如果和小于target，说明和需要增加，左指针向右移动一个；
 * time: O(n²)
 * space: O(1)
 */
var threeSumClosest = function(nums, target) {
  let res = Infinity;
  nums.sort((a,b) => {return a - b});
  for (let i = 0; i < nums.length - 2; i++){
    let left = i + 1, right = nums.length - 1;
    while (left !== right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) return target;
      if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
      if (sum > target) right--;
      if (sum < target) left++;
    }
  }
  return res;
};
