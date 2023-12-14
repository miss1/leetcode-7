/**
 * @param {number[][]} matrix
 * 计算二维数组的前缀和，记录Matrix以i,j为右下角终点时的和，记录在prefixMatrix[i][j]中
 * 先计算当前行的前缀和prefixSum[j]，prefixMatrix[i][j] = prefixSum[j] + prefixMatrix[i - 1][j]
 * time: O(m*n)
 */
var NumMatrix = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  this.prefixMatrix = new Array(m).fill(0).map(val => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    let prfixSum = 0;
    for (let j = 0; j < n; j++) {
      prfixSum += matrix[i][j];
      if (i === 0) this.prefixMatrix[i][j] = prfixSum;
      else this.prefixMatrix[i][j] = this.prefixMatrix[i - 1][j] + prfixSum;
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 * 做减法，res = C - A - B + (A和B的交集)
 * time: O(1)
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let res = this.prefixMatrix[row2][col2];
  if (row1 > 0) res -= this.prefixMatrix[row1 - 1][col2];
  if (col1 > 0) res -= this.prefixMatrix[row2][col1 - 1];
  if (row1 > 0 && col1 > 0) res += this.prefixMatrix[row1 - 1][col1 - 1];
  return res;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */