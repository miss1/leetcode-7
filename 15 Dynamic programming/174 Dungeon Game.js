/**
 * @param {number[][]} dungeon
 * @return {number}
 * 从终点开始，记录至少剩余多少点数才能到达当前位置
 * 对于每一个位置，计算它到达右边和下边两个方向时，当前至少需要多少点数。取更小值
 * time: O(n*m)
 * space: O(1)
 */
var calculateMinimumHP = function(dungeon) {
  let n = dungeon.length, m = dungeon[0].length;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i === n - 1 && j === m - 1) {
        dungeon[i][j] = dungeon[i][j] >= 0 ? 1 : 1 -  dungeon[i][j];
        continue;
      }
      let right = Infinity, bottom = Infinity;
      if (i < n - 1) {
        bottom = dungeon[i + 1][j] <= dungeon[i][j] ? 1 : dungeon[i + 1][j] - dungeon[i][j];
      }
      if (j < m - 1) {
        right = dungeon[i][j + 1] <= dungeon[i][j] ? 1 : dungeon[i][j + 1] - dungeon[i][j];
      }
      dungeon[i][j] = Math.min(right, bottom);
    }
  }
  return dungeon[0][0];
};