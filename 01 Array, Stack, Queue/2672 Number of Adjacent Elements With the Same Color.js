/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 * 每次执行query操作时，在修改之前，记录nums[idx]前后的值是否与它相等，记录下相等的数量pre
 * 在执行修改之后，记录新的nums[idx]前后的值是否与它相等，记录下数量after
 * 最后res[i]的值会等于res[i - 1] + (after - pre)
 * time: O(n)
 * space: O(n)
 */
var colorTheArray = function(n, queries) {
  let res = new Array(queries.length).fill(0);
  let nums = new Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const idx = queries[i][0];
    const color = queries[i][1];
    let pre = 0, after = 0;
    if (nums[idx] !== 0) {
      if (idx > 0 && nums[idx] === nums[idx - 1]) pre += 1;
      if (idx < n - 1 && nums[idx] === nums[idx + 1]) pre += 1;
    }
    if (idx > 0 && color === nums[idx - 1]) after += 1;
    if (idx < n - 1 && color === nums[idx + 1]) after += 1;
    nums[idx] = color;
    if (i === 0) {
      res[i] = after;
    } else {
      res[i] = res[i - 1] + (after - pre);
    }
  }
  return res;
};