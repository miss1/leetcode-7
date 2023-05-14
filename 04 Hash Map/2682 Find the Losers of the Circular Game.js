/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 * 用哈希表记录已经接到过球的人，循环直到有人第二次接到球（接到球的人已经存在于哈希表中时）
 * 游戏结束时，遍历哈希表，将不存在于哈希表中的人挑出来，挑出来的人就是失败者
 * time: O(n)
 * space: O(n)
 */
var circularGameLosers = function(n, k) {
  let set = new Set();
  let i = 1, tag = 1;
  while (!set.has(i)) {
    set.add(i);
    i += (k * tag);
    tag++;
    if (i > n) i = i % n === 0 ? n : i % n;
  }
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) res.push(i);
  }
  return res;
};