/**
 * @param {string} s
 * @return {number}
 * 1 <= s.length <= 500, 所以不能直接转成数字处理，数字过于大，js处理不了
 * 二进制字符串，从右到左遍历，对于当前字符，如果是1，需要+1再右移1位，需要2步操作；如果是0，则直接右移动一位，需要1步操作
 * time: O(n)
 * space: O(1)
 */
var numSteps = function(s) {
  let res = 0, a = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    // a表示进位，n：当前数字加上进位后的值
    const n = Number(s[i]) + a;
    // 当前是第一位时，根据是否有进位来判断需不需要移动
    if (i === 0) {
      if (n === 0 || n === 2) return res + 1;
      if (n === 1) return res;
      if (n === 3) return res + 2;
    }
    // 1: 移动2步，0: 移动1步
    if (n % 2 === 0) {
      res += 1;
      a = n / 2;
    } else {
      res += 2;
      a = (n + 1) / 2;
    }
  }
  return res;
};
