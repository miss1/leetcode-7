/**
 * @param {string} s
 * @return {number}
 * 先用哈希表存储s中每个字符的数量
 * 然后判断每个字符的数量，偶数时直接将其加入到结果中，奇数时，将其减1得到偶数添加入结果
 * 注意如果存在奇数，最后结果要再加1，该奇数放在回文的正中间
 * time: O(n)
 * space: O(1), 一共52个字符
 */
var longestPalindrome = function(s) {
  let map = new Map();
  for (let c of s) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  let res = 0, single = 0;
  for (let item of map) {
    if (item[1] % 2 === 0) res += item[1];
    else {
      res += item[1] - 1;
      single = 1;
    }
  }
  return res + single;
};