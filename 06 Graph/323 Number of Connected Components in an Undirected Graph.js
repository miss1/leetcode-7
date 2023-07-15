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

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * Union Find
 * 每次union合并的时候减少一个node，最后剩下的node数量就是root数量
 * time: O(V+E*α(n))
 * space: O(V)
 */
var countComponents3 = function(n, edges) {
  let count = n;
  let root = new Array(n).fill(0).map((val, i) => i);
  let rank = new Array(n).fill(1);

  const find = function(a) {
    if (root[a] === a) return a;
    return root[a] = find(root[a]);
  };

  const union = function(x, y) {
    let root1 = find(x), root2 = find(y);
    if (root1 !== root2) {
      if (rank[root1] > rank[root2]) root[root2] = root1;
      else if (rank[root1] < rank[root2]) root[root1] = root2;
      else {
        root[root2] = root1;
        rank[root1] += 1;
      }
      count--;
    }
  };

  for (let e of edges) {
    union(e[0], e[1]);
  }
  return count;
};