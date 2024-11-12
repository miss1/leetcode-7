/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 * 先按price排序，再更新beauty的值，排序后的price[i]的beauty应该为0~i中的最大beauty值
 * 再二分搜索寻找最大price
 * time: o(nlogn + mlogn)
 * space: (logn)
 */
var maximumBeauty = function(items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < items.length; i++) {
    items[i][1] = Math.max(items[i - 1][1], items[i][1]);
  }
  const res = [];
  for (let q of queries) {
    let l = 0, r = items.length;
    while (l < r) {
      const mid = l + ((r - l) >> 1);
      if (items[mid][0] > q) r = mid;
      else l = mid + 1;
    }
    if (l - 1 < 0 || l - 1 >= items.length) res.push(0);
    else res.push(items[l - 1][1]);
  }
  return res;
};