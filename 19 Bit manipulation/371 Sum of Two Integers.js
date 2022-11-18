/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 位运算求两数和。先异或计算出相加后的值(不带进位)，再与运算左移一位得到进位。
 * 循环上述步骤直到进位为0时
 * time: O(1)
 * space: O(1)
 */
var getSum = function(a, b) {
  let num = a ^ b;
  let num2 = (a & b) << 1;
  while (num2) {
    let n = num ^ num2;
    num2 = (num & num2) << 1;
    num = n;
  }
  return num;
};
