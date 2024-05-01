/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 * time: O(n)
 * space: O(1)
 */
var reversePrefix = function(word, ch) {
  let p1 = '', p2 = '', tag = true;
  for (let i = 0; i < word.length; i++) {
    p1 = word[i] + p1;
    if (word[i] === ch) {
      p2 = word.slice(i + 1);
      tag = false;
      break;
    }
  }
  return tag ? word : p1 + p2;
};
