/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 双指针分别指向头尾，两数和大于target时，右指针左移；两数和小于target时，左指针右移
 * time: O(n)
 * space: O(1)
 */
var twoSum = function(numbers, target) {
  let i = 0, j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    if (numbers[i] + numbers[j] > target) j--;
    else i++;
  }
  return [];
};
