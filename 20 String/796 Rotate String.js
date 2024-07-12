/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * time: O(n*n)
 * space: O(1)
 */
var rotateString = function(s, goal) {
  if (s.length !== goal.length) return false;
  if (s === goal) return true;
  return (s + s).includes(goal);
};

