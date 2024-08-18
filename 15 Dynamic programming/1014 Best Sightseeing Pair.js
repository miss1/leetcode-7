/**
 * @param {number[]} values
 * @return {number}
 * values[i] + values[j] + i - j = (values[i] + i) + (values[j] - j)
 * 先求出所有的values[i] + i 和 values[j] - j 的值，再从两个数组中取最大值相加即可
 * 要满足 i < j, 需要做以下操作：
 * 1：对于 arr1 = [values[i] + i], 对于每一个i,获取到当前i为止的最大值，存储到leftMax
 * 2：对于 arr2 = [values[j] - j], 对于每一个i,获取到从i到末尾所有数的最大值，存储到rightMax
 * 3：遍历，当位置为i时，获取到i的左右两边的最大值，相加即可
 * time: O(n)
 * space: o(n)
 */
var maxScoreSightseeingPair = function(values) {
  const n = values.length;

  const leftMax = new Array(n).fill(0);
  leftMax[0] = values[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], values[i] + i);
  }

  const rightMax = new Array(n).fill(0);
  rightMax[n - 1] = values[n - 1] - (n - 1);
  rightMax[n - 2] = rightMax[n - 1];
  for (let i = n - 3; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], values[i + 1] - (i + 1));
  }

  let res = 0;
  for (let i = 0; i < n - 1; i++) {
    res = Math.max(res, leftMax[i] + rightMax[i]);
  }
  return res;
};