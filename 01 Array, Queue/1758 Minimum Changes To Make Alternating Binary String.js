/**
 * @param {string} s
 * @return {number}
 * 有两种情况，最终结果以1开头或者以0开头
 * 如果1开头，则偶数位为1，奇数位为0
 * 如果0开头，则偶数位为0，奇数位为1
 * 遍历s，判断位置i中的值是否正确，不正确则需要变化
 * time: O(n)
 * space: O(1)
 */
var minOperations = function(s) {
  let r0 = 0, r1 = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === '0') r1++;
      if (s[i] === '1') r0++;
    } else {
      if (s[i] === '0') r0++;
      if (s[i] === '1') r1++;
    }
  }
  return Math.min(r0, r1);
};