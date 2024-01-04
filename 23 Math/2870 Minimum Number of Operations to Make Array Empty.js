/**
 * @param {number[]} nums
 * @return {number}
 * 先计算每一个数的数量，然后求该数量能否由多个3和2组成
 * 由于2和3是最小的奇数和偶数（除去1），只有当n <= 1 时才不存在答案。其它数都可以由3和2组成
 * time: O(n)
 * space: O(n)
 */
var minOperations = function(nums) {
  let map = new Map();
  for (let n of nums) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  }
  let res = 0;
  for (let c of map.values()) {
    if (c === 1) return -1;
    res += Math.ceil(c / 3);
  }
  return res;
};
