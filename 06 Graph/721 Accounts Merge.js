/**
 * @param {string[][]} accounts
 * @return {string[][]}
 * DFS
 * 将每个邮件作为node建立graph，同一个account下面的邮件互相相连，同一个name下的可以组成一个graph
 * dfs遍历graph，计算graph中有多少个component，每个component就是一个独立的account
 * time: O(nmlognm)
 * space: O(nm)
 */
var accountsMerge = function(accounts) {
  // build graph, O(m*n). graph = {name: {email: set{}}}
  const graph = new Map();
  for (let account of accounts) {
    if (!graph.has(account[0])) graph.set(account[0], new Map());
    const g = graph.get(account[0]);
    for (let i = 1; i < account.length; i++) {
      if (!g.has(account[i])) g.set(account[i], new Set());
      for (let j = i + 1; j < account.length; j++) {
        g.get(account[i]).add(account[j]);
        if (g.has(account[j])) g.get(account[j]).add(account[i]);
        else g.set(account[j], new Set([account[i]]))
      }
    }
  }

  // DFS(nm) 遍历每一个点
  let visited = new Set();
  const dfs = function(node, g, nodes) {
    if (visited.has(node)) return;
    visited.add(node);
    nodes.push(node);
    for (let item of g.get(node)) {
      dfs(item, g, nodes);
    }
  }

  let res = [];
  for (let [key, g] of graph) {
    visited.clear();
    for ([node, v] of g) {
      if (visited.has(node)) continue;
      let nodes = [];
      dfs(node, g, nodes);
      nodes.sort();
      res.push([key, ...nodes]);
    }
  }
  return res;
};
