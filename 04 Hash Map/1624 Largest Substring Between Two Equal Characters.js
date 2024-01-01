/**
 * @param {string} s
 * @return {number}
 * time: O(n)
 * space: O(1)
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let arr = new Array(26).fill(-1);
  let res = -1;
  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (arr[idx] === -1) arr[idx] = i;
    else res = Math.max(res, i - arr[idx] - 1);
  }
  return res;
};
