/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * 由题目可知，答案的范围在 1-piles中的最大值之间，二分搜索查找这个range
 * 对于每次得到的middle，如果当前所花费的时间大于h，说明需要加快速度，则选择右半部分，反之选择左半部分
 * time: O(nlogn)
 * space: O(1)
 */
var minEatingSpeed = function(piles, h) {
  let left = 1, right = Math.max(...piles);
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    let hour = 0;
    for (let pile of piles) {
      hour += Math.ceil(pile / mid);
    }
    if (hour > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};