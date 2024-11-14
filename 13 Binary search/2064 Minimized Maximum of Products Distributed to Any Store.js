/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 * 可能的答案在 1 ~ max(quantities)之间
 * 二分查找满足条件的最小值
 * time: O(nlog(max(quantities)))
 * space: O(1)
 */
var minimizedMaximum = function(n, quantities) {

  const canDistribute = (k) => {
    let t = 0;
    for (let q of quantities) {
      t += Math.ceil(q / k);
    }
    return t <= n;
  };

  let l = 1, r = Math.max(...quantities);
  while (l < r) {
    const m = l + ((r - l) >> 1);
    if (canDistribute(m)) r = m;
    else l = m + 1;
  }
  return l;
};