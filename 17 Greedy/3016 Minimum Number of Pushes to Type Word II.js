/**
 * @param {string} word
 * @return {number}
 * 贪心，先计算所有字符的个数，再按数量排序。将数量多的安排到键盘中每个数字的第一位
 * time: O(n)
 * space: O(26)
 */
var minimumPushes = function(word) {
  const arr = new Array(26).fill(0);
  const start = 'a'.charCodeAt(0);
  for (let w of word) {
    arr[w.charCodeAt(0) - start] += 1;
  }
  arr.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < 26; i++) {
    const d = Math.floor(i / 8) + 1;
    res += arr[i] * d;
  }
  return res;
};