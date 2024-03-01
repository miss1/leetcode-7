/**
 * @param {string} s
 * @return {string}
 * 要求结果是最大的奇数，只要保证最末尾是1就行，将剩余的所有1放到最前面
 * time: O(n)
 * space: O(1)
 */
var maximumOddBinaryNumber = function(s) {
  let res = '', t = false;
  for (let c of s) {
    if (c === '0') res += c;
    else if (!t) t = true;
    else res = c + res;
  }
  return res + '1';
};