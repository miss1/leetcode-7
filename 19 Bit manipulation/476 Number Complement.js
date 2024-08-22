/**
 * @param {number} num
 * @return {number}
 * num&1 获取到二进制的最后一位，再通过和1异或翻转，然后右移去掉最后一位
 * time: O(lognum)
 * space: O(1)
 */
var findComplement = function(num) {
  let s = '';
  while (num > 0) {
    let c = num & 1;
    s = String(c ^ 1) + s;
    num = num >> 1;
  }
  return parseInt(s, 2);
};