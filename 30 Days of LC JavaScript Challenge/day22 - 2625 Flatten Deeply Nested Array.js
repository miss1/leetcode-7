/**
 * @param {any[]} arr
 * @param {number} n
 * @return {any[]}
 */
var flat = function (arr, n) {
  let res = [];
  const dfs = (obj, n) => {
    if (typeof obj !== 'object' || n < 0) {
      res.push(obj);
      return;
    }
    for (let item of obj) {
      dfs(item, n - 1);
    }
  };
  dfs(arr, n);
  return res;
};