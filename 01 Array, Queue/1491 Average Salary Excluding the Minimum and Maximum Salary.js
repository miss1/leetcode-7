/**
 * @param {number[]} salary
 * @return {number}
 * 遍历数组，累加和，同时记录最大值和最小值
 * time: O(n)
 * space: O(1)
 */
var average = function(salary) {
  let total = 0;
  let min = Infinity, max = 0;
  for (let item of salary) {
    total += item;
    min = Math.min(min, item);
    max = Math.max(max, item);
  }
  return (total - min - max) / (salary.length - 2);
};