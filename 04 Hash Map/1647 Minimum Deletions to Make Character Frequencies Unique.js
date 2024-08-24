/**
 * @param {string} s
 * @return {number}
 * 先计算每个字符的数量，再按数量排序，倒序，得到数组arr
 * 遍历arr，记录每个数量，如果当前数字已存在，则将它减少至不存在
 * time: O(n)
 * space: O(1)
 */
var minDeletions = function(s) {
  const arr = new Array(26).fill(0);
  for (let c of s) {
    arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }
  arr.sort((a, b) => b - a);

  let res = 0, record = new Set();
  for (let i = 0; i < 26; i++) {
    let t = arr[i];
    if (t === 0) return res;
    while (record.has(t) && t !== 0) {
      t -= 1;
      res += 1;
    }
    record.add(t);
  }

  return res;
};