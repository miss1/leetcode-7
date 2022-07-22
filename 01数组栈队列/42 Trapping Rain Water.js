/**
 * 思路：遍历计算出每个条能装的容量，每个条的容量等于它左边最大高度，右边最大高度，两者取最小值减去当前条的盖度
 * 所以问题其实是求每个条的左右两边的条的最大高度
 */

/**
 * @param {number[]} height
 * @return {number}
 * 暴力解法，双层循环，获取每个条的左右最大高度；会超时
 * time: O(n²)
 * space: O(1)
 */
var trap = function(height) {
  let res = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = 0, rightMax = 0;
    for (let j = 0; j < height.length; j++) {
      if (j < i) leftMax = Math.max(leftMax, height[j]);
      if (j > i) rightMax = Math.max(rightMax, height[j]);
    }
    if (leftMax > height[i] && rightMax > height[i]) {
      res += Math.min(leftMax, rightMax) - height[i];
    }
  }
  return res;
};

/**
 * @param {number[]} height
 * @return {number}
 * dp，动态规划，每一个条的左边最大高度都跟它前一个条的左边最大高度有关，为当前高度和它前一个条的左边最大高度，两者取最大值。右边同理
 * 正序遍历，记录每个条的左边最大高度。倒序遍历，记录每个条的右边最大高度
 * time: O(n)
 * space: O(n)
 */
var trap1 = function(height) {
  let res = 0, size = height.length;
  let leftMax = new Array(size).fill(0);
  let rightMax = new Array(size).fill(0);
  leftMax[0] = height[0];
  rightMax[size - 1] = height[size - 1];
  for (let i = 1; i < size - 1; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }
  for (let i = size - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  for (let i = 1; i < size - 1; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
};
