/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 * 判断一个graph是否是一个有效树
 * 需要满足两个条件
 * 1：只有一个connected component：从任意一个点开始遍历，能够遍历完所有的node
 * 2：graph中不存在环：edges = n - 1 (树的概念，线的数量等于节点数量减去1)
 * DFS
 * 从任意一个点开始遍历graph，最后判断visited的节点数量是否等于n, 以及是否等于edges.length + 1
 * time: O(N+E)
 * space: O(N+E)
 */
var validTree = function(n, edges) {
  let graph = new Map();
  for (let edge of edges) {
    if (graph.has(edge[0])) graph.get(edge[0]).push(edge[1]);
    else graph.set(edge[0], [edge[1]]);

    if (graph.has(edge[1])) graph.get(edge[1]).push(edge[0]);
    else graph.set(edge[1], [edge[0]]);
  }
  let visited = new Set();
  const dfs = function(node) {
    if (visited.has(node)) return;
    visited.add(node);
    if (!graph.has(node)) return;
    for (let i = 0; i < graph.get(node).length; i++) {
      dfs(graph.get(node)[i]);
    }
  };
  dfs(0);
  return visited.size === n && visited.size === edges.length + 1;
};