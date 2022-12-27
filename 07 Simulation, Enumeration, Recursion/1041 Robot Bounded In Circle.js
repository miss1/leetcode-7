/**
 * @param {string} instructions
 * @return {boolean}
 * 数学知识：如果存在环，最多四个循环之后会回到初始位置；判断是否存在环，只要做一次循环就够了
 * 1：如果一次后回到初始点，说明存在循环轨迹
 * 2：如果一次循环后方向跟初始方向不一样，说明存在循环轨迹
 * The robot stays in the circle if and only if (looking at the final vector) it changes direction (ie. doesn't stay pointing north), or it moves 0.
 * time: O(n)
 * space: O(1)
 */
var isRobotBounded = function(instructions) {
  const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let d = 0, x = 0, y = 0;
  for (let instruction of instructions) {
    if (instruction === 'G') {
      x += direction[d][0];
      y += direction[d][1];
    }
    if (instruction === 'L') {
      d = d === 0 ? 3 : d - 1;
    }
    if (instruction === 'R') {
      d = d === 3 ? 0 : d + 1;
    }
  }
  return (x === 0 && y === 0) || d !== 0;
};