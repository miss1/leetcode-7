/**
 * @param {number[][]} edges
 * @return {number[]}
 * Union-Find 找环
 * 如果两个点的root相同，说明当前的边就是答案
 * time: O(n)
 * space: O(n)
 */
var findRedundantConnection = function(edges) {
  const n = edges.length;

  let root = new Array(n + 1).fill(0).map((val, i) => i);
  let rank = new Array(n + 1).fill(1);

  const find = function(a) {
    if (root[a] === a) return a;
    return root[a] = find(root[a]);
  };

  const union = function(a, b) {
    const rootA = find(a), rootB = find(b);
    if (rootA === rootB) return [a, b];
    if (rank[rootA] > rank[rootB]) root[rootB] = rootA;
    else if (rank[rootA] < rank[rootB]) root[rootA] = rootB;
    else {
      root[rootB] = rootA;
      rank[rootA] += 1;
    }
    return null;
  };

  for (let e of edges) {
    const r = union(e[0], e[1]);
    if (r) return r;
  }

  return [];
};