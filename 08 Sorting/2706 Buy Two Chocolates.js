/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 * 找到最小的两个值即可
 * time: O(n)
 * space: O(1)
 */
var buyChoco = function(prices, money) {
  let a = Infinity, b = Infinity;
  for (let p of prices) {
    if (p < a) {
      b = a;
      a = p;
    } else if (p < b) {
      b = p
    }
  }
  let leftover = money - a - b;
  return leftover < 0 ? money : leftover;
};
