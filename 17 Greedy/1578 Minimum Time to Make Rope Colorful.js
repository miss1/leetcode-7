/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 * 贪心，遍历colors，当出现两个连续的颜色时，删除更小那个即可
 * time: O(n)
 * space: O(1)
 */
var minCost = function(colors, neededTime) {
  let i = 0, j = 1;
  let res = 0;
  while (j < colors.length) {
    if (colors[i] === colors[j]) {
      if (neededTime[i] < neededTime[j]) {
        res += neededTime[i];
        i = j;
        j += 1;
      } else {
        res += neededTime[j];
        j += 1;
      }
    } else {
      i = j;
      j += 1;
    }
  }
  return res;
};