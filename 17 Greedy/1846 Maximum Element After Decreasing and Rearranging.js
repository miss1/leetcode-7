/**
 * @param {number[]} arr
 * @return {number}
 * arr[0]必须是，相邻的数相差不能超过1，每个数只能减少不能增大，要求最大能到多少
 * 先将数组排序
 * 贪心，从第一个数1开始，如果后一个数大于前一个数+1，只要将该数减少到前一个数+1
 * 如果后一个数小于前一个数+1，该数不能增大也不能再减小了，保持原样
 * time: O(nlogn)
 * space: O(logn)
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
  arr.sort((a, b) => a - b);
  arr[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }
  return arr[arr.length - 1];
};