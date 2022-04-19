/**
 * @param {number[]} nums
 * @return {number}
 * 集合，set。将数组转换成set
 * 遍历数组，判断当前数字 num-1 是否在set中，若不在，说明当前数字是一个序列的起点，循环判断是否存在 num+1
 * 若num-1在set中，说明不是一个序列的起点，继续循环判断下一个数
 * time: O(n)
 * space: O(n)
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!set.has(num - 1)) {
      let n = 1;
      while (set.has(num + 1)) {
        n++;
        num +=1;
      }
      count = Math.max(count, n);
    }
  }
  return count;
};