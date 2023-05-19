/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * 要求graph有多少个connected component，并且任意两个点之间都要有一条线
 * 数学知识：当有n个点，且任意两个点之间都有一条线时，线的数量为：line = n(n-1)/2
 * DFS
 * 遍历图的每个component，记录下node的个数count，和线的数量line
 * 因为这里是无向图，两个点之间会有两条线，所以最终计算出来的线的数量是2*line，所以最终只需判断 n(n-1) 是否等于line
 * time: O(N+E)
 * space: O(N+E)
 */
var countCompleteComponents = function(n, edges) {
  let graph = new Map();
  for (let edge of edges) {
    if (graph.has(edge[0])) graph.get(edge[0]).push(edge[1]);
    else graph.set(edge[0], [edge[1]]);

    if (graph.has(edge[1])) graph.get(edge[1]).push(edge[0]);
    else graph.set(edge[1], [edge[0]]);
  }
  let visited = new Set(), res = 0;
  let count = 0, line = 0;
  const dfs = function(node) {
    if (visited.has(node)) return;
    visited.add(node);
    count++;
    for (let i = 0; i < graph.get(node).length; i++) {
      line++;
      dfs(graph.get(node)[i]);
    }
  };
  for (let i = 0; i < n; i++) {
    if (!graph.has(i)) {
      res++;
      visited.add(i);
    }
    if (visited.has(i)) continue;
    count = 0;
    line = 0;
    dfs(i);
    if (count * (count - 1) === line) res++;
  }
  return res;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * BFS
 */
var countCompleteComponents2 = function(n, edges) {
  let graph = new Map();
  for (let edge of edges) {
    if (graph.has(edge[0])) graph.get(edge[0]).push(edge[1]);
    else graph.set(edge[0], [edge[1]]);

    if (graph.has(edge[1])) graph.get(edge[1]).push(edge[0]);
    else graph.set(edge[1], [edge[0]]);
  }
  let visited = new Set(), res = 0;
  let count = 0, line = 0;
  const bfs = function(node) {
    let stack = [node];
    while (stack.length > 0) {
      let e = stack.shift();
      visited.add(e);
      count++;
      for (let i = 0; i < graph.get(e).length; i++) {
        line++;
        let next = graph.get(e)[i];
        if (!visited.has(next) && !stack.includes(next)) stack.push(next);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    if (!graph.has(i)) {
      res++;
      visited.add(i);
    }
    if (visited.has(i)) continue;
    count = 0;
    line = 0;
    bfs(i);
    if (count * (count - 1) === line) res++;
  }
  return res;
};