/**
 * You are given m arrays, where each array is sorted in ascending order.
 *
 * You can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|.
 *
 * Return the maximum distance.
 */

/**
 * @param {number[][]} arrays
 * @return {number}
 * 合并区间的解法。
 * 遍历arrays，对于每两个区间，计算最大差值，最大差值=最大值-最小值
 * 然后再更新当前的最大值和最小值（获取当前的区间），再跟下一个区间比较
 * time: O(n)
 * space: O(1)
 */
var maxDistance = function(arrays) {
  let x = arrays[0][0], y = arrays[0][arrays[0].length - 1];
  let res = -Infinity;
  for (let i = 1; i < arrays.length; i++) {
    const min = arrays[i][0], max = arrays[i][arrays[i].length - 1];
    const d1 = Math.abs(y - min);
    const d2 = Math.abs(max - x);
    res = Math.max(res, d1, d2);
    x = Math.min(x, min);
    y = Math.max(y, max);
  }
  return res;
};