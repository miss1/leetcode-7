/**
 * @param {number[][]} grid
 * @return {number}
 * 小岛问题，BFS
 * 要找0中与其最近的1的距离中最大的值。反向思考，从1中找0，每一次将当前的所有1向四个方向扩展1格，直到找到最后一个0，累计的扩展次数就是最大距离
 * 每次扩展，距离加1，并且将0标记为1记录已经遍历过
 * time: O(n²)
 * space: O(n²)
 */
var maxDistance = function(grid) {
  let arr = [];
  let dx = [-1, 0, 1, 0];  // 方向，x，上下移动
  let dy = [0, 1, 0, -1];  // 方向，y，左右移
  let n = grid.length, m = grid[0].length;
  // 先找到所有的1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) arr.push([i, j]);
    }
  }
  // 岛屿中全都是0或者全都是1，返回-1
  if (arr.length === 0 || arr.length === n * m) return -1;
  // BFS，每次遍历取出当前所有的1并且向四个方向扩展一格
  let res = 0;
  while (arr.length > 0) {
    res++;
    let size = arr.length;
    for (let k = 0; k < size; k++) {
      let g = arr.shift();
      for (let i = 0; i < 4; i++) {
        let newX = g[0] + dx[i];
        let newY = g[1] + dy[i];
        if (newX >=0 && newX < n && newY >=0 && newY < m && grid[newX][newY] === 0) {
          grid[newX][newY] = 1;
          arr.push([newX, newY]);
        }
      }
    }
  }
  return res - 1;
};
