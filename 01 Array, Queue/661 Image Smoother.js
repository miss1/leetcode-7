/**
 * @param {number[][]} img
 * @return {number[][]}
 * 题目是要求给定一个二维数组img，对于每一个cell， 计算它和它周围八个邻居的值的平均数。如果某个邻居不存在则忽略它（在边界的cell邻居数会少于8）
 * time: O(mn)
 * space: O(mn)
 */
var imageSmoother = function(img) {
  const m = img.length, n = img[0].length;
  let res = new Array(m).fill(0).map(val => new Array(n).fill(0));
  const direction = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
  for (let i =0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let total = 1, sum = img[i][j];
      for (let d of direction) {
        let x = i + d[0], y = j + d[1];
        if (x < 0 || x >= m || y < 0 || y >= n) continue;
        total++;
        sum += img[x][y];
      }
      res[i][j] = Math.floor(sum / total);
    }
  }
  return res;
};