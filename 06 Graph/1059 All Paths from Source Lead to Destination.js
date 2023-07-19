/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 * DFS + Backtrack, 遍历每一条路径，判断是否以destination为终点
 * 会超时，需要优化，看下一个优化的方法
 */
var leadsToDestination = function(n, edges, source, destination) {
  let graph = new Map();
  for (let e of edges) {
    if (graph.has(e[0])) graph.get(e[0]).push(e[1]);
    else graph.set(e[0], [e[1]]);
  }

  let visited = new Set();
  const dfs = function(node) {
    visited.add(node);
    if (!graph.has(node)) return node === destination;
    for (let n of graph.get(node)) {
      if (visited.has(n)) return false;
      let rst = dfs(n);
      if (!rst) return false;
      visited.delete(n);
    }
    return true;
  };
  return dfs(source);
};


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 * DFS, 用hashmap记录每个node的状态，初始状态为false，如果找到了一条有效路径则更新该路径上的所有node为true
 * 再次寻找其它路径时，如果遇到为已经visited状态的node，直接返回，不用继续往下找(避免backtrack方法中的重复)
 * time: O(V+E)
 * space: O(V+E)
 */
var leadsToDestination2 = function(n, edges, source, destination) {
  let graph = new Map();
  for (let e of edges) {
    if (graph.has(e[0])) graph.get(e[0]).push(e[1]);
    else graph.set(e[0], [e[1]]);
  }

  let visited = new Map();
  const dfs = function(node) {
    if (visited.has(node)) return visited.get(node);
    if (!graph.has(node)) return node === destination;
    visited.set(node, false);
    for (let n of graph.get(node)) {
      if (!dfs(n)) return false;
    }
    visited.set(node, true);
    return true;
  };
  return dfs(source);
};