/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 * 先找到最大值，再遍历candies，计算当前candie加上extra是否会大于等于max
 * time: O(n)
 * space: O(1)
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  let res = [];
  for (let candie of candies) {
    if (candie + extraCandies >= max) res.push(true);
    else res.push(false);
  }
  return res;
};