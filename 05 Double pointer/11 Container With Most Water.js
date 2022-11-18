/**
 * @param {number[]} height
 * @return {number}
 * 双指针，分别从数组两头开始，计算面积，每次移动值更小的指针
 * time: O(n)
 * space: O(1)
 */
var maxArea = function(height) {
  let res = 0;
  let left = 0, right = height.length - 1;
  while (left < right) {
    if (height[left] < height[right]) {
      res = Math.max(res, height[left] * (right - left));
      left++;
    } else {
      res = Math.max(res, height[right] * (right - left));
      right--;
    }
  }
  return res;
};
