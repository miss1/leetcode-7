/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * 两个指针同时遍历word1和word2
 * time: O(n)
 * space: O(1)
 */
var mergeAlternately = function(word1, word2) {
  let res = '';
  let p1 = 0, p2 = 0;
  while (p1 < word1.length || p2 < word2.length) {
    if (p1 < word1.length) res += word1[p1];
    if (p2 < word2.length) res += word2[p2];
    p1++;
    p2++;
  }
  return res;
};