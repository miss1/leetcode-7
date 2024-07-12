/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 * BFS，寻找从起点能否到另一个点，每次可以往两个方向移动
 * time: O(n)
 * space: O(n)
 */
var canReach = function(arr, start) {
  let currentLevel = [start];
  let set = new Set([start]);
  while (currentLevel.length > 0) {
    let nextLevel = [];
    for (let idx of currentLevel) {
      if (arr[idx] === 0) return true;
      const n1 = idx + arr[idx], n2 = idx - arr[idx];
      if (n1 >= 0 && n1 < arr.length && !set.has(n1)) {
        nextLevel.push(n1);
        set.add(n1);
      }
      if (n2 >= 0 && n2 < arr.length && !set.has(n2)) {
        nextLevel.push(n2);
        set.add(n2);
      }
    }
    currentLevel = nextLevel;
  }
  return false;
};

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 * DFS, 对于每个点，有两个方向，只要有一个方向找到了就返回true
 * time: O(n)
 * space: O(n)
 */
var canReach2 = function(arr, start) {
  const visited = new Set();
  const dfs = (idx) => {
    if (idx < 0 || idx >= arr.length || visited.has(idx)) return false;
    if (arr[idx] === 0) return true;
    visited.add(idx);
    return dfs(idx + arr[idx]) || dfs(idx - arr[idx]);
  };
  return dfs(start);
};