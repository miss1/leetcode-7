/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * time: O(n)
 * space: O(n)
 */
var shortestToChar = function(s, c) {
  let res = [];
  let cIndex = -Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) cIndex = i;
    res[i] = i - cIndex;
  }
  let rcIndex = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) rcIndex = i;
    res[i] = Math.min(res[i], rcIndex - i);
  }
  return res;
};

// 两遍循环，先从左到右遍历s, 找到右边第一个c的距离。再从右到左遍历，找到左边第一个c的距离。取两个值中的最小值