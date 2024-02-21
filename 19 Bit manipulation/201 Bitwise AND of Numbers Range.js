/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 * 知识点：去掉n最右边的1：n & (n - 1)
 * 从最大值right开始，x = right & (right - 1) 会去掉right最右边的1，x的后几位是0，
 * 在x 到 (right - 1)这一段数字之间做与操作，值都会等于x
 * 相当于慢慢将右边的1变成0
 * time: O(32)
 * space: O(1)
 */
var rangeBitwiseAnd = function(left, right) {
  while (right > left) {
    right = right & (right - 1);
  }
  return right;
};
