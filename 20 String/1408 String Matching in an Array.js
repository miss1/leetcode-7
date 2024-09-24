/**
 * @param {string[]} words
 * @return {string[]}
 * 暴力解法
 * time: O(n*n*m)
 * space: O(n)
 */
var stringMatching = function(words) {
  const set = new Set();
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i].length > words[j].length && words[i].includes(words[j])) set.add(words[j]);
      if (words[j].length >= words[i].length && words[j].includes(words[i])) set.add(words[i]);
    }
  }
  return [...set];
};