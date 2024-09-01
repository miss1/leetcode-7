/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 * time: O(m*n)
 * space: O(1)
 */
var construct2DArray = function(original, m, n) {
  if (original.length !== m * n) return [];
  const arr = [];
  for (let i = 0; i < m; i++) {
    const r = [];
    for (let x = i * n; x < i * n + n; x++) {
      r.push(original[x]);
    }
    arr.push(r);
  }
  return arr;
};