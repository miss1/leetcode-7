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

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * BFS, Topological sorting
 * 记录每一个node的in-degree，从in-degree为0的node开始bfs遍历，逐步更新每一个node的in-degree
 * 如果遍历结束后visited的长度不等于node的总数，说明存在环，不可能遍历完所有node
 * time: O(V+E)
 * space: O(V+E)
 */
var findOrder2 = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  let graph = new Map();
  for (let p of prerequisites) {
    if (graph.has(p[1])) graph.get(p[1]).push(p[0]);
    else graph.set(p[1], [p[0]]);
    inDegree[p[0]] += 1;
  }

  let current = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) current.push(i);
  }

  let visited = new Set();
  while (current.length > 0) {
    let next = [];
    for (let node of current) {
      visited.add(node);
      if (!graph.has(node)) continue;
      for (let n of graph.get(node)) {
        if (visited.has(n)) continue;
        inDegree[n] -= 1;
        if (inDegree[n] === 0) next.push(n);
      }
    }
    current = next;
  }

  if (visited.size !== numCourses) return [];
  return [...visited];
};