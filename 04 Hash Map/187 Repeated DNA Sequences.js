/**
 * @param {string} s
 * @return {string[]}
 * 遍历s，用slice获取长度为10的subsequence。存储到set中
 * time: O(n)
 * space: O(n)
 */
var findRepeatedDnaSequences = function(s) {
  let set = new Set();
  let res = new Set();
  for (let i = 10; i <= s.length; i++) {
    const sub = s.slice(i - 10, i);
    if (set.has(sub)) res.add(sub);
    else set.add(sub);
  }
  return [...res];
};
