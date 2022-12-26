/**
 * @param {number[]} arr
 * @return {number[]}
 * 跟338题类似。定义一个方法求每个数字中1的个数。在根据1的个数排序
 * time: O(nlogn * logm)
 * space: O(logn)
 */
var sortByBits = function(arr) {
  const countBits = function(num) {
    let count = 0;
    while (num > 0) {
      if (num & 1 === 1) count += 1;
      num = num >> 1;
    }
    return count;
  };
  return arr.sort((a, b) => {
    let count1 = countBits(a);
    let count2 = countBits(b);
    if (count1 === count2) return a - b;
    else return count1 - count2;
  });
};