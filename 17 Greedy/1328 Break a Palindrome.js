/**
 * @param {string} palindrome
 * @return {string}
 * 贪心，从左边到中间遍历字符串，如果遇到字符不等于a，则将其设置为a，并且返回
 * 如果遍历完左半部分，没有发现一个a，说明字符串只包含a，则将最后一位字符设置为b，返回
 * time: O(n)
 * space: O(n)
 */
var breakPalindrome = function(palindrome) {
  if (palindrome.length === 1) return '';
  let res = palindrome.split('');
  for (let i = 0; i < (palindrome.length >> 1); i++) {
    if (palindrome[i] !== 'a') {
      res[i] = 'a';
      return res.join('');
    }
  }
  res[res.length - 1] = 'b';
  return res.join('');
};