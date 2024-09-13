/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 * a ^ b ^ c = d => b ^ c = a ^ d
 * 先前缀和方式求arr种每一个idx的 XOR 值
 * 再遍历queries，根据a ^ b ^ c = d => b ^ c = a ^ d求值
 * time: O(n)
 * space: O(n)
 */
var xorQueries = function(arr, queries) {
  const s = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    s.push(arr[i] ^ s[s.length - 1]);
  }

  const res = [];
  for (let [i, j] of queries) {
    if (i === 0) res.push(s[j]);
    else res.push(s[j] ^ s[i - 1]);
  }

  return res;
};