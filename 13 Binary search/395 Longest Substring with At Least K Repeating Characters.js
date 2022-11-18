/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 分治，要求子串中每个字符个数大于等k。先遍历记录下每个字符的个数，找到第一个个数小于k的字符mid
 * 字符mid的个数小于k，说明答案存在于mid的两边，从mid切分
 * time: O(n²) mid不一定在终点，最坏情况是n平方
 * space: O(n) 递归栈深度
 */
var longestSubstring = function(s, k) {
  const divide = function(start, end) {
    if (end - start + 1 < k) return 0;
    let map = new Map();
    for (let i = start; i <= end; i++) {
      map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    }
    for (let i = start; i <= end; i++) {
      if (map.get(s[i]) >= k) continue;
      let leftEnd = i - 1;
      let rightStart = i + 1;
      while (rightStart <= end && map.get(s[rightStart]) < k) rightStart++;
      return Math.max(divide(start, leftEnd), divide(rightStart, end));
    }
    return end - start + 1;
  };
  return divide(0, s.length - 1);
};