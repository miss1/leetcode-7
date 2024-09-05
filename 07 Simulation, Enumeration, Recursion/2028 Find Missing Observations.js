/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 * 先通过mean求出n个dice的总和sn
 * dice的值为1-6，所以sn的值应该在 1*n - 6*n 之间，否则不存在答案
 * 新建一个长度为n的数组，sn/6 做为基数，将剩下的值逐个添加到每一个item
 * time: O(n)
 * space: O(1)
 */
var missingRolls = function(rolls, mean, n) {
  const total = (n + rolls.length) * mean;
  const sm = rolls.reduce((acc, val) => acc + val, 0);
  let sn = total - sm;

  if (sn < n || sn > n * 6) return [];

  const initial = Math.floor(sn / n);
  const res = new Array(n).fill(initial);

  sn = sn % n;
  for (let i = 0; i < sn; i++) {
    res[i] += 1;
  }

  return res;
};