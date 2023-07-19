/**
 * @param {string[][]} tickets
 * @return {string[]}
 * DFS + Backtrack
 * 注意根据题目的意思，[["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]，JFK下一个应该是NRT，如果先走KUL则无法一遍走完所有节点，所以不行
 * 建立好graph之后，先将每个点的neighbors排序，以满足题目has the smallest lexical order要求
 * 回溯，根据题意要从JFK为起点一遍走完所有节点，说明edges的长度等于res的长度-1(path.length === tickets.length + 1)，这个是回溯的终止条件
 * 以防一条路走多遍，要用visited来记录已经走过的路，回溯返回时要记得同步更新visited
 * 由于可能出现一个node的neighbors中有重复的点，所以visited中用数组记录node中对应的每个neighbor是否已经走过
 * eg: graph = {JFK: ["KUL", "NRT", "KUL"]}
 * visited = {JFK: [false, false, false]}
 * time: O(E ^ d) d is the maximum number of flights from an airport.
 * space: O(V + E)
 */
var findItinerary = function(tickets) {
  let graph = new Map();
  for (let t of tickets) {
    if (graph.has(t[0])) graph.get(t[0]).push(t[1]);
    else graph.set(t[0], [t[1]]);
  }
  let visited = new Map();
  for (let item of graph) {
    item[1].sort();
    visited.set(item[0], new Array(item[1].length).fill(false));
  }

  let res = [];
  const dfs = function(node, path) {
    path.push(node);
    if (path.length === tickets.length + 1) {
      res = [...path];
      return true;
    }
    if (!graph.has(node)) return false;
    for (let i = 0; i < graph.get(node).length; i++) {
      let n = graph.get(node)[i];

      if (visited.get(node)[i]) continue;
      visited.get(node)[i] = true;

      let ret = dfs(n, path);
      if (ret) return true;

      path.pop();
      visited.get(node)[i] = false;
    }
    return false;
  };
  dfs('JFK', []);
  return res;
};