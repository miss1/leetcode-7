/**
 * @param {number[][]} graph
 * @return {number[][]}
 * DFS，寻找从0到n-1的路径
 * time: O(2^n * n) 最终路径的总节点个数（res的总长）
 * space: O(n) 递归栈
 */
var allPathsSourceTarget = function(graph) {
  let res = [];
  const dfs = function(n, path) {
    for (let item of graph[n]) {
      if (item !== graph.length - 1) {
        dfs(item, path + ',' + item);
      } else {
        res.push((path + ',' + item).split(','));
      }
    }
  };
  dfs(0, '0');
  return res;
};