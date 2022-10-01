/**
 * @param {number[]} prices
 * @return {number}
 * 因为最多能做两笔交易，所以将prices切分成两部分，遍历prices，以当前点为界，求出左边做一次交易的最大收益和右边一次交易的最大收益，相加即可。
 * 具体实现方法：遍历prices，求出当前点为终点时，一次交易的最大收益，存储到leftProfit中
 * 反向遍历prices，求出以当前点为起点时，一次交易的最大收益，存储到rightProfit中。最后将左右两边的收益相加，求最大值即可
 * time: O(n)
 * space: O(n)
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let length = prices.length;
  let leftProfit = new Array(length).fill(0);
  let rightProfit = new Array(length).fill(0);
  let min = prices[0], maxProfit = 0;
  for (let i = 1; i < length; i++) {
    if (prices[i] > min) maxProfit = Math.max(maxProfit, prices[i] - min);
    else min = prices[i];
    leftProfit[i] = maxProfit;
  }
  let max = prices[length - 1];
  maxProfit = 0;
  for (let i = length - 2; i >= 0; i--) {
    if (prices[i] < max) maxProfit = Math.max(maxProfit, max - prices[i]);
    else max = prices[i];
    rightProfit[i] = maxProfit;
  }
  let res = 0;
  for (let i = 0; i < length; i++) res = Math.max(res, leftProfit[i] + rightProfit[i]);
  return res;
};