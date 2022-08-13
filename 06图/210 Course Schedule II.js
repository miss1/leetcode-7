/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * 邻接表构建图：eg: {1: [2,3], 2: [3,4]}
 * 再DFS遍历图，从每条路径的末端开始存储节点到order中，最后逆序输出order即可
 * 用visited存储已经获取到的order，用tag存储每条路径中已经访问过的节点避免陷入循环中
 * time: O(V + E) V: 顶点个数，E: 边的数量
 * space: O(V + E)
 */
var findOrder = function(numCourses, prerequisites) {
  let map = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    let item = prerequisites[i];
    if (map.has(item[1])) map.get(item[1]).push(item[0]);
    else map.set(item[1], [item[0]]);
  }
  let order = [], visited = new Set();
  let possible = true, tag = new Set();
  const dfs = function(n) {
    if (!map.has(n) || !possible) {
      order.push(n);
      visited.add(n);
      return;
    }
    for (let i = 0; i < map.get(n).length; i++) {
      let key =  map.get(n)[i];
      if (visited.has(key)) continue;
      if (tag.has(key)) {
        possible = false;
        return;
      }
      tag.add(key);
      if (map.has(key)) dfs(key);
      else {
        order.push(key);
        visited.add(key);
      }
    }
    order.push(n);
    visited.add(n);
  };
  for (let i = 0; i < numCourses; i++) {
    tag = new Set();
    if (!visited.has(i) && possible) {
      tag.add(i);
      dfs(i);
    }
  }
  if (!possible) return [];
  let res = [];
  for (let i = order.length - 1; i >= 0; i--) res.push(order[i]);
  return res;
};