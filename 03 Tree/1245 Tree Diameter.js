/**
 * @param {number[][]} edges
 * @return {number}
 * 给定树中边的关系，要求直径。
 * 跟1522类似，区别在于这里需要自己建立graph，然后随机取一个node作为root，遍历graph
 * 取0作为root，然后dfs获取每一个分叉的深度，取最大的两个。用visited来记录已经访问过的点避免走回头路
 * time: O(n)
 * space: O(n)
 */
var treeDiameter = function(edges) {
  if (edges.length === 0) return 0;
  let graph = new Map();
  for (let e of edges) {
    if (graph.has(e[0])) graph.get(e[0]).push(e[1]);
    else graph.set(e[0], [e[1]]);
    if (graph.has(e[1])) graph.get(e[1]).push(e[0]);
    else graph.set(e[1], [e[0]]);
  }
  let visited = new Set(), res = 0;
  const dfs = function(root) {
    if (root == null || visited.has(root)) return 0;
    visited.add(root);
    let d1 = 0, d2 = 0;
    for (let n of graph.get(root)) {
      if (visited.has(n)) continue;
      let dpt = dfs(n);
      if (dpt >= d1) {
        d2 = d1;
        d1 = dpt;
      } else if (dpt >= d2) {
        d2 = dpt;
      }
    }
    res = Math.max(res, d1 + d2);
    return d1 + 1;
  };
  dfs(0);
  return res;
};