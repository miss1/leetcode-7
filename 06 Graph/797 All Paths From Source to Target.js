/**
 * @param {number[][]} graph
 * @return {number[][]}
 * DFS，backtrack
 * time: O(2^n * n) the number of possible paths
 * space: O(n) 递归栈
 */
var allPathsSourceTarget = function(graph) {
  let res = [];
  if (graph == null || graph.length === 0) return res;

  const dfs = function(node, path) {
    path.push(node);
    if (node === graph.length - 1) {
      res.push([...path]);
      return;
    }
    for (let next of graph[node]) {
      dfs(next, path);
      path.pop();
    }
  };

  dfs(0, []);
  return res;
};

/**
 * @param {number[][]} graph
 * @return {number[][]}
 * BFS
 * queue记录当前的所有路径，路径中最后一个节点为当前节点。
 * 持续寻找当前节点的neighbors, 添加到queue中
 */
var allPathsSourceTarget2 = function(graph) {
  let res = [];
  if (graph == null || graph.length === 0) return res;

  let queue = [[0]];
  for (let n of queue) {
    let node = n[n.length - 1];
    for (let next of graph[node]) {
      if (next === graph.length - 1) res.push([...n, next]);
      else queue.push([...n, next]);
    }
  }
  return res;
};