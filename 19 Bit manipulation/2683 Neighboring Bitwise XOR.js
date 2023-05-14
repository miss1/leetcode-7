/**
 * @param {number[]} derived
 * @return {boolean}
 * a ^ b = c -> a = b ^ c
 * 已知derived[i] = original[i] ^ original[i + 1]; derived[n-1] = original[n-1] ^ original[0]
 * 要求original，只有两种情况original以0开头或者以1开头
 * 又：original[i] = original[i - 1] ^ derived[i - 1]
 * 所以只需original[0]开始，一步步求得original[n-1]的值，最后判断original[n-1] ^ original[0]是否等于derived[n-1]即可
 * time: O(n)
 * space: O(1)
 */
var doesValidArrayExist = function(derived) {
  let s1 = 0, ori1 = 0;
  let s2 = 1, ori2 = 1;
  for (let d of derived) {
    s1 = s1 ^ d;
    s2 = s2 ^ d;
  }
  return s1 === ori1 || s2 === ori2;
};