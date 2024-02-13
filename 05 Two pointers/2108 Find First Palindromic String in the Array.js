/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  const isPalindrom = function(str) {
    let l = 0, r = str.length - 1;
    while (l <= r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  };
  for (let word of words) {
    if (isPalindrom(word)) return word;
  }
  return '';
};
