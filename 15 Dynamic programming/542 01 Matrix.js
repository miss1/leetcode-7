/**
 * @param {number[][]} mat
 * @return {number[][]}
 * dfs的思路，对于每一个cell，判断从它四个方向出发到达0的距离，取最小值
 * 即：res[i][j] = Math.min(top, left, bottom, right) + 1。直接dfs解决的话需要考虑dfs的重复问题（防止走回头路进入死循环）
 * 我们可以先从左上角开始，对于每一个cell，计算它左边和上面方向的结果值，因为从左上角开始，所以上面和左边一定会有值
 * res[i][j] = Math.min(top, left) + 1;
 * 之后再重新从右下角开始，同理，对于每一个cell，计算它右边和下边的结果值
 * res[i][j] = Math.min(res[i][j], right + 1, bottom + 1);
 * 通过两次遍历，计算得到四个方向的值，取最小值。最后得到res[i][j] = Math.min(top, left, bottom, right) + 1
 * time: O(m * n)
 * space: O(m * n)
 */
var updateMatrix = function(mat) {
  const m = mat.length, n = mat[0].length;
  let res = new Array(m).fill(-1).map(val => new Array(n).fill(-1));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) res[i][j] = 0;
      else {
        let top = i === 0 ? Infinity : res[i - 1][j];
        let left = j === 0 ? Infinity : res[i][j - 1];
        res[i][j] = Math.min(top, left) + 1;
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (mat[i][j] === 0) res[i][j] = 0;
      else {
        let bottom = i === m - 1 ? Infinity : res[i + 1][j];
        let right = j === n - 1 ? Infinity : res[i][j + 1];
        res[i][j] = Math.min(res[i][j], bottom + 1, right + 1);
      }
    }
  }
  return res;
};