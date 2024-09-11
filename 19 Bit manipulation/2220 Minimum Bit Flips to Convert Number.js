/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 * 查找两个数字有多少位是不同的，用 &1 来获取最后一位的数，再右移。这样就能比较每一位的数字了
 * time: O(n) n: number of bits
 * space: O(1)
 */
var minBitFlips = function(start, goal) {
  let res = 0;
  while (start > 0 || goal > 0) {
    const a = start & 1, b = goal & 1;
    if (a !== b) res++;
    start = start >> 1;
    goal = goal >> 1;
  }
  return res;
};