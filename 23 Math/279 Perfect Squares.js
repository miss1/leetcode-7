/**
 * @param {number} n
 * @return {number}
 * 先计算出n以内的所有可以开方的数 perfectSquare
 * BFS，n为root，以下每一层的数都为当前node的值分别减去perfectSquare中的每一个数，直到得到0为止，计算出当前的层数；每一层的node都做去重减少计算量
 * eg: level = 0: root = 12, perfectSquare = [1,4,9] -> level = 1: node = [11,8,3] -> level = 2: node = [10,7,2,4]
 * level = 3: node = [9,6,1,3,0] -> 有一个0，return level = 3
 * 复杂度：我算不出来==
 */
var numSquares = function(n) {
  let perfectSquare = [];
  let i = 1;
  while (i * i <= n) {
    perfectSquare.push(i * i);
    i++;
  }
  let arr = [n], nextArr = [], count = 0;
  while (arr.length > 0) {
    let current = arr.pop();
    for (let j = 0; j < perfectSquare.length; j++) {
      let num = current - perfectSquare[j];
      if (num === 0) return count + 1;
      if (num > 0) nextArr.push(num);
    }
    if (arr.length === 0) {
      arr = [...new Set(nextArr)];
      count += 1;
      nextArr = []
    }
  }
  return count;
};

/**
 * @param {number} n
 * @return {number}
 * DP, 背包问题。 跟322类似
 * 先算出所有的perfectSquare，再求用最少的perfectSquare组成target(用最少的coin组成target)
 * time: O(n * Math.sqrt(n))
 * space: O(n)
 */
var numSquares2 = function(n) {
  let squares = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) squares.push(i * i);
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let square of squares) {
      if (square > i) break;
      dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }
  }
  return dp[n];
};
