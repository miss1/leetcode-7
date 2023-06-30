/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 分别记录两个字符串中的每个字母的数量。如果magazine中存在某个字符数量小于ransomNote中对应的字符，则返回false
 * time: O(n)
 * space: O(1), 26个字符
 */
var canConstruct = function(ransomNote, magazine) {
  let arr = new Array(26).fill(0), start = 'a'.charCodeAt(0);
  for (let m of magazine) {
    arr[m.charCodeAt(0) - start] += 1;
  }
  for (let r of ransomNote) {
    arr[r.charCodeAt(0) - start] -= 1;
  }
  for (let i = 0; i < 26; i++) {
    if (arr[i] < 0) return false;
  }
  return true;
};