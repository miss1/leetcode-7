/**
 * @param {string} moves
 * @return {boolean}
 * 记录坐标点p[0,0], 'U'和'D'对应p[0], 'L'和'R'对应p[1]。'U'和'R'坐标加1，'D'和'L'坐标减1
 * time: O(n)
 * space: O(1)
 */
var judgeCircle = function(moves) {
  let p = [0,0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') p[0] += 1;
    if (moves[i] === 'D') p[0] -= 1;
    if (moves[i] === 'L') p[1] -= 1;
    if (moves[i] === 'R') p[1] += 1;
  }
  return p[0] === 0 && p[1] === 0;
};
