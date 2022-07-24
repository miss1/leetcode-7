/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 暴力解法，便利矩阵，当遇到0时，便利该点的row和col，设置标记(设置为null)
 * 最后再便利矩阵，将标记改成0
 * time: O(mn(m+n))
 * space: O(1)
 */
var setZeroes = function(matrix) {
  let n = matrix.length, m = matrix[0].length;
  const addTag = function(x, y) {
    matrix[x][y] = null;
    for (let i = 0; i < n; i++) {
      if (matrix[i][y] !== 0) matrix[i][y] = null;
    }
    for (let j = 0; j < m; j++) {
      if (matrix[x][j] !== 0) matrix[x][j] = null;
    }
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        addTag(i, j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == null) {
        matrix[i][j] = 0;
      }
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 遍历矩阵，如果当前点(i,j)为0，则设置改点的row的第一个(i,0)和col的第一个(0,j)两个点为0。
 * 再遍历矩阵，只要当前点的横行第一个或者纵行第一个的点为0，说明当前点应该为0，设置为0
 * 因为需要获取点的横行和纵行的第一个点，所以应该从(1,1)开始便利。最上面那行和最左边那一列需要单独处理
 * time: O(mn)
 * space: O(1)
 */
var setZeroes2 = function(matrix) {
  let n = matrix.length, m = matrix[0].length;
  let isCol = false;
  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === 0) isCol = true;
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] ===0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) matrix[0][j] = 0;
  }
  if (isCol) {
    for (let i = 0; i < n; i++) matrix[i][0] = 0;
  }
};