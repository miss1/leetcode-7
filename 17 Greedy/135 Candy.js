/**
 * @param {number[]} ratings
 * @return {number}
 * 贪心
 * 先从左到右遍历，如果当前值大于它左边的值，则candy[i] = candy[i - 1] + 1, 否则candy[i] = 1
 * 再从右到左遍历，如果当前值大于它右边的值，则candy[i] = candy[i + 1] + 1，否则candy[i] = 1
 * time: O(n)
 * space: O(n)
 */
var candy = function(ratings) {
  const n = ratings.length;
  const arr = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) arr[i] = arr[i - 1] + 1;
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) arr[i] = Math.max(arr[i], arr[i + 1] + 1)
  }

  return arr.reduce((acc, val) => acc + val, 0);
};