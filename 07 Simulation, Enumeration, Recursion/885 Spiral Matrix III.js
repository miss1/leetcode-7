/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 * 通过观察可知，R,B,L,T 四个方向中，朝每个方向走的步数依次为：1，1，2，2，3，3，4，4，5，5，6，6....
 * 所以，当方向变为朝右或者朝左时，步数需要+1
 * 从起点开始，每个方向走满step步数，如果当前位置超出boundary，则不要放进结果数组中
 * time: O(n*m); n = max(rStart + 1, rows - rStart) * 2, m = max(cStart + 1, cols - cStart) * 2; 起点为中心点
 * time: 最小值为 O(rows * cols),最大值为 O(2rows * 2cols) = O(4 * rows * cols)
 * space: O(rows * cols)
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let step = 1, idx = 0;
  let i = rStart, j = cStart;
  const res = [[rStart, cStart]];
  while (res.length < rows * cols) {
    for (let t = 0; t < step; t++) {
      i += direction[idx][0]
      j += direction[idx][1];
      if (i < 0 || i >= rows || j < 0 || j >= cols) continue;
      res.push([i, j]);
      if (res.length === rows * cols) return res;
    }
    idx = idx === 3 ? 0 : idx + 1;
    if (idx === 0 || idx === 2) step += 1;
  }
  return res;
};