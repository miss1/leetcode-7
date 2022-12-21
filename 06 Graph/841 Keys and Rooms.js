/**
 * @param {number[][]} rooms
 * @return {boolean}
 * DFS
 * time: O(N+E) N: rooms; E: keys
 * space: O(N)
 */
var canVisitAllRooms = function(rooms) {
  let visited = new Set();
  const dfs = function(key) {
    if (visited.size === rooms.length) return;
    visited.add(key);
    let keys = rooms[key];
    for (let i = 0; i < keys.length; i++) {
      if (!visited.has(keys[i])) dfs(keys[i]);
    }
  };
  dfs(0);
  return visited.size === rooms.length;
};

/**
 * @param {number[][]} rooms
 * @return {boolean}
 * BFS
 * time: O(N+E) N: rooms; E: keys
 * space: O(N)
 */
var canVisitAllRooms2 = function(rooms) {
  let visited = new Set();
  let currentKeys = [0];
  while (currentKeys.length > 0 && visited.size < rooms.length) {
    let nextKeys = [];
    for (let i = 0; i < currentKeys.length; i++) {
      let key = currentKeys[i];
      if (!visited.has(key)) {
        visited.add(key);
        nextKeys.push(...rooms[key]);
      }
    }
    currentKeys = [...new Set(nextKeys)];
  }
  return visited.size === rooms.length;
};

/**
 * @param {number[][]} rooms
 * @return {boolean}
 * BFS, 优化版
 * time: O(N+E) N: rooms; E: keys
 * space: O(N+E)
 */
var canVisitAllRooms3 = function(rooms) {
  let visited = new Set();
  let stack = [0];
  while(stack.length > 0) {
    let key = stack.pop();
    if (!visited.has(key)) {
      visited.add(key);
      for (let k of rooms[key]) {
        stack.push(k);
      }
    }
  }
  return visited.size === rooms.length;
};

