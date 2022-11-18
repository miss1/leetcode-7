/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 * 用二维数组arr存储跳到每个格子的概率，每走一步，遍历所有格子，更新走到每个格子的概率
 * 当前位置可以在上一轮通过8个方向跳过来。把这八个地方的概率 X 1/8加到当前位置就是当前的概率
 * time: O(kn²)
 * space: O(n²)
 */
var knightProbability = function(n, k, row, column) {
  let arr = new Array(n).fill(0).map(val => new Array(n).fill(0));
  // 八个方向
  let direction = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]];
  arr[row][column] = 1;
  for (let s = 0; s < k; s++) {
    // tmp存储本轮走完，每个格子的概率
    let tmp = new Array(n).fill(0).map(val => new Array(n).fill(0));
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        for (let d = 0; d < direction.length; d++) {
          let preX = i + direction[d][0];
          let preY = j + direction[d][1];
          if (preX >= 0 && preY >= 0 && preX < n && preY < n) tmp[i][j] += arr[preX][preY] * 0.125;
        }
      }
    }
    arr = tmp;
  }
  // 走完k步后，将所有格子的概率加起来就是答案
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      res += arr[i][j];
    }
  }
  return res;
};
