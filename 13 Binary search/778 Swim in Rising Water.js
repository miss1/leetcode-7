/**
 * @param {number[][]} grid
 * @return {number}
 * 二分+二维网格的DFS遍历
 * 二分的解空间为0到grid中的最大值。要找最小值，dfs遍历网格，验证时间为mid时能不能到达终点，如果可以，说明大于mid的部分都可以抛弃。
 * 二维网格中每一步只要有一个方向能走通就行，所以最后的返回结果四个只要有一个为true就行
 * time: O(nlogm) n为grid的总长度，m为grid中的最大值
 * space: O(n)
 */
var swimInWater = function(grid) {
  let left = 0, right = Math.max(...grid.map(val => Math.max(...val)));
  let set = new Set();
  const dfsTest = function(target, x, y) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return false;
    if (set.has(x + ',' + y)) return false;
    if (grid[x][y] > target) return false;
    if (x === grid.length - 1 && y === grid[0].length - 1) return true;
    set.add(x + ',' + y);
    return dfsTest(target, x + 1, y) || dfsTest(target, x - 1, y) || dfsTest(target, x, y + 1) || dfsTest(target, x, y - 1);
  };

  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (dfsTest(mid, 0, 0)) right = mid;
    else left = mid + 1;
    set.clear();
  }
  return left;
};