/**
 * @param {number[][]} grid
 * @return {number}
 * 用两个hashmap分别记录row和column中同一arr的数量，arr.join(',')转成字符串作为key，value记录数量
 * 遍历map，找到row和column中相同的key，将value相乘
 * time: O(n * n)
 * space: O(n)
 */
var equalPairs = function(grid) {
  let rowMap = new Map, colMap = new Map();
  const len = grid.length;
  for (let i = 0; i < len; i++) {
    const key1 = grid[i].join(',');
    rowMap.set(key1, rowMap.has(key1) ? rowMap.get(key1) + 1 : 1);
    let key2 = '';
    for (let j = 0; j < len; j++) {
      key2 += grid[j][i];
      if (j < len - 1) key2 += ',';
    }
    colMap.set(key2, colMap.has(key2) ? colMap.get(key2) + 1 : 1);
  }
  let res = 0;
  for (let item of rowMap) {
    if (colMap.has(item[0])) {
      res += colMap.get(item[0]) * item[1];
    }
  }
  return res;
};