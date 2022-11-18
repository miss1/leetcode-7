/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 * 给定一个数组，只能从数组的两端取数字，一共取k个数字，求和为最大的值
 * 反向思考，数组中两头一共取出k个数之后，cardPoints中还剩下cardPoints.length - k 个数，k个数和最大的情况下，cardPoints.length - k个数是和会最小
 * 所以题意可以理解为，求长度为cardPoints.length - k的连续子数组，和最小的情况
 * 滑动窗口，窗口长度为cardPoints.length - k，记录最小的和
 * time: O(n)
 * space: O(1)
 */
var maxScore = function(cardPoints, k) {
  let total = 0;
  for (let i = 0; i < cardPoints.length; i++) total += cardPoints[i];
  if (k === cardPoints.length) return total;
  let left = 0, right = 1;
  let sum = cardPoints[left];
  while (right < cardPoints.length - k) {
    sum += cardPoints[right];
    right++;
  }
  let minSum = sum;
  while (right < cardPoints.length) {
    sum = sum + cardPoints[right] - cardPoints[left];
    minSum = Math.min(sum, minSum);
    left++;
    right++;
  }
  return total - minSum;
};