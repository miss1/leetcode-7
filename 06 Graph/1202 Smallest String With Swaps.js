/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 * 先使用邻接表根据pairs构建图，再dfs遍历图，记录下联通的字符以及对应的下标
 * 相连通的字符可以互相交换位置，所以可以把记录下的联通的字符和下标分别排序。再将排好序的字符放到对应的下标上即可
 * time: O(E + VlogV), E: the number of edges (the number of pairs). V: the number of vertices (the length of the given string)
 * space: O(E + V)
 */
var smallestStringWithSwaps = function(s, pairs) {
  let graph = new Map();
  // build graph: O(E), space: O(E)
  for (let p of pairs) {
    if (graph.has(p[0])) graph.get(p[0]).push(p[1]);
    else graph.set(p[0], [p[1]]);
    if (graph.has(p[1])) graph.get(p[1]).push(p[0]);
    else graph.set(p[1], [p[0]]);
  }
  // DFS: O(E+V), space: O(V)
  let visited = new Set();
  const dfs = function(n, charaters, indices) {
    visited.add(n);
    indices.push(n);
    charaters.push(s[n]);
    if (!graph.has(n)) return;
    for (let item of graph.get(n)) {
      if (!visited.has(item)) dfs(item, charaters, indices);
    }
  };
  // Sort: time: O(VlogV), space: logV
  let res = s.split('');
  for (let item of graph) {
    if (!visited.has(item[0])) {
      let charaters = [], indices = [];
      dfs(item[0], charaters, indices);
      charaters.sort();
      indices.sort((a, b) => a - b);
      for (let i = 0; i < indices.length; i++) {
        let index = indices[i];
        res[index] = charaters[i];
      }
    }
  }
  return res.join('');
};

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 * Union Find
 * 先用Union Find找到所有的模块以及每个模块的node
 * 再将每个模块的node，下标以及对应的字符存储到两个数组，分别排序，然后按照排序后的顺序放到结果数组中
 */
var smallestStringWithSwaps2 = function(s, pairs) {
  // V
  let root = new Array(s.length).fill(0).map((val, i) => i);
  let rank = new Array(s.length).fill(1);

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
  // E*α(V)
  for (let p of pairs) {
    union(p[0], p[1]);
  }
  // V*α(V)
  let res = new Array(s.length), map = new Map();
  for (let i = 0; i < s.length; i++) {
    let r = find(i);
    if (map.has(r)) {
      map.get(r).get('ind').push(i);
      map.get(r).get('val').push(s[i]);
    } else {
      let m = new Map();
      m.set('ind', [i]);
      m.set('val', [s[i]]);
      map.set(r, m);
    }
  }
  // VlogV
  for (let item of map) {
    let ind = item[1].get('ind');
    let value = item[1].get('val');
    ind.sort((a, b) => a - b);
    value.sort();
    for (let i = 0; i < ind.length; i++) {
      res[ind[i]] = value[i];
    }
  }
  return res.join('');
};