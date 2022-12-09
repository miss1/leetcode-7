/**
 * @param {number[]} citations
 * @return {number}
 * h-index, 题目可以理解成找到最大的h，使citations中至少有h个item大于等于h。
 *二分，每次取中点mid，则h为length - mid。即从mid到终点一共有h个数，只要citations[mid] >= h, 则说明当前h是一个答案，我们要找最大值，
 * 此时需要增加h，则要减小mid，所以right左移。反之left右移
 * time: O(logn)
 * space: O(1)
 */
var hIndex = function(citations) {
  let left = 0, len = citations.length, right = len - 1, mid = 0;
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (citations[mid] >= len - mid) right = mid - 1;
    else left = mid + 1;
  }
  return len - left;
};