/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 * Tip: The trick here is that you can randomly pick any two nodes in tree and XOR them without changing other nodes, since all nodes are connected.
 * 只需要从nums中挑选n个数（n是偶数），和k做XOR，生成新的数组，让和最大
 * 先计算出nums中每个数和k的xor值，分成两组，一组值是变大的xm，一组值是变小的xs
 * 如果xm的长度不是偶数，说明有一个不能做xor, 需要考虑是否需要要跟xs中的值结对（取决于增加的值会不会大于减少的值）
 * time: O(nlogn)
 * space: O(n)
 */
var maximumValueSum = function(nums, k, edges) {
  let xs = [], xm = [];
  let res = 0;
  for (let n of nums) {
    const r = n ^ k;
    if (r > n) xm.push([n, r]);
    else xs.push([n, r]);
    res += Math.max(n, r);
  }

  xs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
  xm.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));

  const len = xm.length % 2;
  if (len === 1) {
    if (xs.length === 0 || (xm[0][1] - xm[0][0]) - (xs[0][0] - xs[0][1]) <= 0) res -= (xm[0][1] - xm[0][0]);
    else res -= (xs[0][0] - xs[0][1]);
  }

  return res;
};
