/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 * BFS，DFS，从source开始，将所有neighbor push进stack中，在逐个寻找下一层neighbor
 * 直到找到destination或者stack为空
 * time: O(V+E)
 * space: O(V+E)
 */
var validPath = function(n, edges, source, destination) {
  let graph = new Map();
  for (let e of edges) {
    if (graph.has(e[0])) graph.get(e[0]).push(e[1]);
    else graph.set(e[0], [e[1]]);

    if (graph.has(e[1])) graph.get(e[1]).push(e[0]);
    else graph.set(e[1], [e[0]]);
  }

  let stack = [source], visited = new Set();
  while (stack.length > 0) {
    let node = stack.pop();
    if (visited.has(node)) continue;
    if (node === destination) return true;
    visited.add(node);
    for (let n of graph.get(node)) {
      stack.push(n);
    }
  }
  return false;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 * Union-Find, 两个node的root相等，则一定存在路径
 * time:  O(E * α(n))
 * space: O(n)
 */
var validPath2 = function(n, edges, source, destination) {
  let root = new Array(n).fill(0).map((val, idx) => idx);
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
    }
  };

  for (let e of edges) {
    union(e[0], e[1]);
  }

  return find(source) === find(destination);
};