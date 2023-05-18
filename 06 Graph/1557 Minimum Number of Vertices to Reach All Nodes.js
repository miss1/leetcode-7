/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 * Find the smallest set of vertices from which all nodes in the graph are reachable.
 * 只要遍历edges，找到没有前一个点的点，即所有edges[1]都是可达的点。其它剩余的点都应该是一个起点，因为该点不能经过其它点到达
 * 将所有起点放到一个数组中，就是答案
 * time: O(n+e)
 * space: O(n)
 */
var findSmallestSetOfVertices = function(n, edges) {
  let set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(i);
  }
  for (let edge of edges) {
    set.delete(edge[1]);
  }
  return [...set];
};