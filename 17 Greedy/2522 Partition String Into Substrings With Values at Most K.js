/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 贪心，每次分割时取最接近k的数
 * time: O(n) n: s.length
 * space: O(1)
 */
var minimumPartition = function(s, k) {
  let res = 0;
  let num = 0;
  for (let c of s) {
    let n = Number(c);
    if (n > k) return -1;
    if ((num * 10 + n) > k) {
      res++;
      num = n;
    } else {
      num = num * 10 + n;
    }
  }
  if (num !== 0) res++;
  return res;
};