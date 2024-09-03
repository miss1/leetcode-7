/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 先将s转换成数字，再遍历计算
 * time: O(k*n)
 * space: O(1)
 */
var getLucky = function(s, k) {
  let str = '';
  for (let c of s) {
    str += (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
  }

  while (k > 0) {
    let sum = 0;
    for (let n of str) {
      sum += Number(n);
    }
    str = String(sum);
    k--;
  }

  return Number(str);
};