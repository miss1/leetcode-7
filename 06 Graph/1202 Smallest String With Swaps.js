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