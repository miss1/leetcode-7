/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 * BFS, Topological sorting
 * time: O(V + E)
 * space: O(V + E)
 */
var minimumSemesters = function(n, relations) {
  let graph = new Map(), inDegree = new Array(n + 1).fill(0);
  for (let e of relations) {
    if (graph.has(e[0])) graph.get(e[0]).push(e[1]);
    else graph.set(e[0], [e[1]]);
    inDegree[e[1]] += 1;
  }
  let current = [];
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) current.push(i);
  }
  let res = 0, visited = new Set();
  while (current.length > 0) {
    let next = [];
    for (let node of current) {
      visited.add(node);
      if (!graph.has(node)) continue;
      for (let c of graph.get(node)) {
        if (visited.has(c)) continue;
        inDegree[c] -= 1;
        if (inDegree[c] === 0) next.push(c);
      }
    }
    res++;
    current = next;
  }
  if (visited.size !== n) return -1;
  return res;
};