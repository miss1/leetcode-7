/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 * 图，DFS。visited标记已经遍历过的节点，并且标记好所属的group。
 * Hash表存储图 eg: {1: [2,3], 2: [3,4]}
 * time: O(V+E), V为点的个数，E为图的边的数目
 * space: O(V+E)
 */
var possibleBipartition = function(n, dislikes) {
  let graph = new Map();
  let visited = new Map();
  for (let i = 0; i < dislikes.length; i++) {
    let d = dislikes[i];
    if (graph.has(d[0])) graph.get(d[0]).push(d[1]);
    else graph.set(d[0], [d[1]]);
  }
  const dfs = function(p, group) {
    if (visited.size === n) return true;
    visited.set(p, group);
    if (!graph.has(p)) return true;
    for (let i = 0; i < graph.get(p).length; i++) {
      if (!visited.has(graph.get(p)[i])) {
        if (!dfs(graph.get(p)[i], -1 * group)) return false;
      } else {
        if (visited.get(graph.get(p)[i]) === group) return false;
      }
    }
    return true;
  };
  const getInitGroup = function (p) {
    if (!graph.has(p)) return 1;
    for (let i = 0; i < graph.get(p).length; i++) {
      let hate = graph.get(p)[i];
      if (visited.has(hate)) return visited.get(hate) * -1;
    }
    return 1;
  };
  for (let i = 1; i < n + 1; i++) {
    if (!visited.has(i) && !dfs(i, getInitGroup(i))) return false;
  }
  return true;
};
