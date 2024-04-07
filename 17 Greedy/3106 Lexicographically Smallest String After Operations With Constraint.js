/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 每次修改只能走一步，要求在k步以内，让新字符串lexicographically smallest
 * 贪心，要让字符串最小，从左边字符开始修改，让每个字符尽量最小。
 * 26个字符首位相连，所以对于每个字符，判断它向前走k步和向后走k步，哪个字符更小，则取哪个。
 * time: O(n)
 * space: O(1)
 */
var getSmallestString = function(s, k) {
  let res = '';
  for (let c of s) {
    if (k <= 0) {
      res += c;
      continue;
    }
    const t = c.charCodeAt(0) - 'a'.charCodeAt(0);
    if (t + k >= 26 || t - k <= 0) {
      // 两个方向，至少有一个能到达a
      let left = t - k <= 0 ? t : Infinity;
      let right = t + k >= 26 ? 26 - t : Infinity;
      k = k - Math.min(left, right);
      res += 'a';
    } else {
      // 不能到达a，要让字符串更小，只能向前走
      let diff = t - k;
      res += String.fromCharCode(diff + 'a'.charCodeAt(0));
      k = 0;
    }
  }
  return res;
};
