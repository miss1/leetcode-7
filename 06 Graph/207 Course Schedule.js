/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * 先用邻接表构建图，再判断图中是否存在环，若存在，则说明无法完成所有课程
 * time: O(V+E)
 * space: O(V+E)
 */
var canFinish = function(numCourses, prerequisites) {
  let map = new Map();
  for (let relation of prerequisites) {
    if (map.has(relation[1])) {
      let n = map.get(relation[1]);
      n.push(relation[0])
      map.set(relation[1], n);
    } else {
      map.set(relation[1], [relation[0]]);
    }
  }
  let visited = new Set();
  let checked = new Set();
  const isCyclic = function (course) {
    if (checked.has(course)) return false;
    if (visited.has(course)) return true;
    if (!map.has(course)) return false;
    visited.add(course);
    let ret = false;
    for (let c of map.get(course)) {
      ret = isCyclic(c);
      if (ret) break;
    }
    visited.delete(course);
    checked.add(course);
    return ret;
  };
  for (let i = 0; i < numCourses; i++) {
    if (isCyclic(i)) return false;
  }
  return true;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * BFS, Topological sorting
 * 跟210几乎一摸一样
 * time: O(V+E)
 * space: O(V+E)
 */
var canFinish2 = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  let graph = new Map();
  for (let p of prerequisites) {
    if (graph.has(p[1])) graph.get(p[1]).push(p[0]);
    else graph.set(p[1], [p[0]]);
    inDegree[p[0]] += 1;
  }

  let visited = new Set(), current = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) current.push(i);
  }

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

  return visited.size === numCourses;
};
