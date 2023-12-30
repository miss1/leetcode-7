/**
 * @param {string[]} words
 * @return {boolean}
 * time: O(m*n)
 * space: O(1)
 */
var makeEqual = function(words) {
  let arr = new Array(26).fill(0);
  for (let word of words) {
    for (let w of word) {
      arr[w.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
  }
  for (let n of arr) {
    if (n === 0) continue;
    if (n % words.length !== 0) return false;
  }
  return true;
};
