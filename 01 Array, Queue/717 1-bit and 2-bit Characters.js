/**
 * @param {number[]} bits
 * @return {boolean}
 * 遇到0走一格，遇到1走两格，看最后是不是停在最后一位
 * time: O(n)
 * space: O(1)
 */
var isOneBitCharacter = function(bits) {
  let i = 0;
  while (i < bits.length - 1) {
    if (bits[i] === 0) {
      i += 1;
    } else {
      i += 2;
    }
  }
  return i === bits.length - 1;
};