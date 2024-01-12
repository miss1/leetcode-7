/**
 * @param {string} s
 * @return {boolean}
 * time: O(n)
 * space: O(1)
 */
var halvesAreAlike = function(s) {
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let a = 0, b = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (set.has(s[i])) a++;
    if (set.has(s[i + s.length / 2])) b++;
  }
  return a === b;
};