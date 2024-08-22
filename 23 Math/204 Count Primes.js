/**
 * @param {number} n
 * @return {number}
 * 埃拉托斯特尼筛法
 * time: nlog(logn)
 * space: O(n)
 */
var countPrimes = function(n) {
  let arr = new Array(n).fill(true);
  for (let i = 2; i < n; i++) {
    if (!arr[i]) continue;
    let p = 2;
    while (i * p < n) {
      arr[i * p] = false;
      p++;
    }
  }
  const count = arr.filter(val => val).length;
  return count > 2 ? count - 2 : 0;
};