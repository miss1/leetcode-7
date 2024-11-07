/**
 * @param {number[]} candidates
 * @return {number}
 * bitwise AND 的值要大于0的话，则要求所有数字至少在某一个相同的位置上都是1
 * 对于数字 n < 10^7, 每个数字都有23位，获取它的1的位置，记录到bitCount中
 * 最后只要计算bitCount中哪一个位置的1的数量最多即可，最多的1的数量就是最大长度
 * time: O(n)
 * space: O(1)
 */
var largestCombination = function(candidates) {
  const bitCount = new Array(24).fill(0);
  for (let n of candidates) {
    let i = 0;
    while (n > 0) {
      if (n & 1 === 1) bitCount[i] += 1;
      i++;
      n = n >> 1;
    }
  }
  return Math.max(...bitCount);
};