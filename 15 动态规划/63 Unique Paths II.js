/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 跟62题一样，只是遇到障碍物时，讲障碍物所在位置的存储的路径数量改为0，因为有障碍物，所以没有路径能到达该点
 * time: O(m * n)
 * space: O(m * n)
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let res = new Array(obstacleGrid.length).fill(0).map(val => new Array(obstacleGrid[0].length).fill(0));
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (i === 0 && j === 0) res[i][j] = obstacleGrid[i][j] === 1 ? 0 : 1;
      else if (obstacleGrid[i][j] === 1) res[i][j] = 0;
      else if (i === 0) res[i][j] = res[i][j - 1];
      else if (j === 0) res[i][j] = res[i - 1][j];
      else res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
  }
  return res[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};
