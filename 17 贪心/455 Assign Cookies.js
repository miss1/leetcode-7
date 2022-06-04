/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 先将g和s排序，再用两个指针，每个饼干尝试一次，不满足条件则换下一块饼干
 * time: O(nlogn)
 * space: O(logn)
 */
var findContentChildren = function(g, s) {
  g.sort((a,b) => a - b);
  s.sort((a,b) => a - b);
  let i = 0, j = 0;
  let res = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      res++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return res;
};
