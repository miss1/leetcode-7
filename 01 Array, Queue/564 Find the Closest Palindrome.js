/**
 * @param {string} n
 * @return {string}
 * 找最近的回文，只需将右半边的数字改成左半边的映射即可
 * 对于最中间的数字，考虑三种情况：left + x + right; left + (x - 1) + right; left + (x + 1) + right;
 * 比较三个值与n的距离，取最短的即可
 * 有一些edge case需要注意：0-10，1000，999，1001
 * 本身就是回文的情况：最中间的值-1即可，注意单独处理最中间的值为0的情况
 * time: O(n)
 * space: O(1)
 */
var nearestPalindromic = function(n) {
  const num = Number(n);
  if (num < 10 || String(num - 1).length === n.length - 1) return String(num - 1); // 0~10, 100, 1000 ...
  if (String(num + 1).length === n.length + 1) return String(num + 2); // 99, 999, 9999 ...
  if (String(num - 2).length === n.length - 1) return String(num - 2); // 101, 1001, 10001 ...

  let left = '', right = '';
  let i = 0, j = n.length - 1;
  while (i < j) {
    left += n[i];
    right = n[i] + right;
    i++;
    j--;
  }

  // n.length % 2 === 0
  if (i !== j) {
    if (left + right !== n) {
      // +1, -1, itself
      const t1 = n[i - 1] === '0' ? Number(n[i - 1]) : Number(n[i - 1]) - 1;
      const x1 = left.slice(0, left.length - 1) + t1 + t1 + right.slice(1);
      const x2 = left + right;
      const t3 = Number(n[i - 1]) + 1;
      const x3 = left.slice(0, left.length - 1) + t3 + t3 + right.slice(1);

      let res = Math.abs(Number(x2) - Number(n)) < Math.abs(Number(x1) - Number(n)) ? x2 : x1;
      return Math.abs(Number(x3) - Number(n)) < Math.abs(Number(res) - Number(n)) ? x3 : res;
    }

    // itself -> n = 7667
    if (Number(n[i - 1]) !== 0) {
      const t = Number(n[i - 1]) - 1;
      return left.slice(0, left.length - 1) + t + t + right.slice(1);
    }

    // itself -> n = 8008
    const x = Number(left.slice(left.length - 2, left.length - 1)) - 1;
    return left.slice(0, left.length - 2) + x + '99' + x + right.slice(2);
  }

  // n.length % 2 === 1 && itself -> n = 989
  if (left + n[i] + right === n) {
    const t = n[i] === '0' ? 1 : Number(n[i]) - 1;
    return left + t + right;
  }

  // n.length % 2 === 1; +1, -1, itself
  const p = n[i] === '0' ? 0 : (Number(n[i]) - 1);
  const t1 = left + p + right;
  const t2 = left + n[i] + right;
  const t3 = left + (Number(n[i]) + 1) + right;

  let res = Math.abs(Number(t2) - Number(n)) < Math.abs(Number(t1) - Number(n)) ? t2 : t1;
  return Math.abs(Number(t3) - Number(n)) < Math.abs(Number(res) - Number(n)) ? t3 : res;
};