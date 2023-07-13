/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 * 现根据边构建graph，要求树的高度最小，说明root应该在最中间的位置
 * 要寻找最中间的位置，只需逐步砍掉叶子leaf，直到只剩下两个节点，剩下的两个节点就是最中心
 * time: O(n)
 * space: O(n)
 */
var findMinHeightTrees = function(n, edges) {
  if (edges.length === 0) return [0];
  let graph = new Map();
  for (let e of edges) {
    if (graph.has(e[0])) graph.get(e[0]).add(e[1]);
    else graph.set(e[0], new Set([e[1]]));
    if (graph.has(e[1])) graph.get(e[1]).add(e[0]);
    else graph.set(e[1], new Set([e[0]]));
  }
  let leaf = [];
  for (let item of graph) {
    if (item[1].size === 1) leaf.push(item[0]);
  }
  while (graph.size > 2) {
    let newleaf = [];
    for (let node of leaf) {
      for (let neighbor of graph.get(node)) {
        graph.get(neighbor).delete(node);
        if (graph.get(neighbor).size === 1) newleaf.push(neighbor);
      }
      graph.delete(node);
    }
    leaf = newleaf;
  }
  return Array.from(graph.keys());
};