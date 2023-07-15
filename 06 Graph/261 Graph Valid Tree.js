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

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 * disjoint set, union find
 * 树的两个条件，1：只有一个root，2：不存在环
 * 先假设root的数量count等于n，每次做union时root会减去1，最后看是否只剩下一个root
 * 环，当两个node相连并且他们的root相等时，说明存在环
 * time: O(N + E*α(N))
 * space: O(N)
 */
var validTree2 = function(n, edges) {
  let count = n;
  // O(n)
  let root = new Array(n).fill(0).map((val, i) => i);
  let rank = new Array(n).fill(1);

  const find = function(a) {
    if (root[a] === a) return a;
    return root[a] = find(root[a]);
  };

  const union = function(x, y) {
    let root1 = find(x), root2 = find(y);
    if (root1 === root2) return false;
    if (rank[root1] > rank[root2]) root[root2] = root1;
    else if (rank[root1] < rank[root2]) root[root1] = root2;
    else {
      root[root2] = root1;
      rank[root1] += 1;
    }
    count--;
    return true;
  };

  for (let e of edges) {
    if (!union(e[0], e[1])) return false;
  }
  return count === 1;
};