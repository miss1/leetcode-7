/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * DFS
 * 求一共有多少个单独的模块
 * 每次从一个起点开始遍历时，就是一个新的模块
 * time: O(N+E)
 * space: O(N+E)
 */
var countComponents = function(n, edges) {
  let graph = new Map();
  // build graph
  for (let edge of edges) {
    if (graph.has(edge[0])) graph.get(edge[0]).push(edge[1]);
    else graph.set(edge[0], [edge[1]]);

    if (graph.has(edge[1])) graph.get(edge[1]).push(edge[0]);
    else graph.set(edge[1], [edge[0]]);
  }
  // DFS
  let visited = new Set(), res = 0;
  const dfs = function(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (let i = 0; i < graph.get(node).length; i++) {
      dfs(graph.get(node)[i]);
    }
  };
  // traverse from a starting point
  for (let i = 0; i < n; i++) {
    if (!graph.has(i)) {
      res++;
      visited.add(i)
      continue;
    }
    if (visited.has(i)) continue;
    dfs(i);
    res++;
  }
  return res;
};


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * BFS
 */
var countComponents2 = function(n, edges) {
  let graph = new Map();
  for (let edge of edges) {
    if (graph.has(edge[0])) graph.get(edge[0]).push(edge[1]);
    else graph.set(edge[0], [edge[1]]);

    if (graph.has(edge[1])) graph.get(edge[1]).push(edge[0]);
    else graph.set(edge[1], [edge[0]]);
  }

  let visited = new Set(), res = 0;
  const bfs = function(node) {
    let stack = [node];
    while (stack.length > 0) {
      let e = stack.shift();
      visited.add(e);
      for (let i = 0; i < graph.get(e).length; i++) {
        if (!visited.has(graph.get(e)[i])) stack.push(graph.get(e)[i]);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!graph.has(i)) {
      res++;
      visited.add(i)
      continue;
    }
    if (visited.has(i)) continue;
    bfs(i);
    res++;
  }
  return res;
};