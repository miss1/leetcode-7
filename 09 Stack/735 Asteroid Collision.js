/**
 * @param {number[]} asteroids
 * @return {number[]}
 * 负数向左移，正数向右移，左右边界是无限的。
 * 说明一个负数，如果它的左边有正数，需要判断哪个球会被撞毁
 * stack，当遇到正数时，直接入栈，当遇到负数时，如果栈顶是正数(在负数左边)，说明会相撞，判断大小然后出栈
 * 最后要保证不相撞，需要所有的负数在数组的左边，正数在右边
 * time: O(n)
 * space: O(n)
 */
var asteroidCollision = function(asteroids) {
  let stack = [];
  for (let item of asteroids) {
    if (stack.length === 0 || item > 0 || stack[stack.length - 1] < 0) stack.push(item);
    else {
      while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(item)) {
        stack.pop();
      }
      if (stack[stack.length - 1] === Math.abs(item)) stack.pop();
      else if (stack.length === 0 || stack[stack.length - 1] < 0) stack.push(item);
    }
  }
  return stack;
};