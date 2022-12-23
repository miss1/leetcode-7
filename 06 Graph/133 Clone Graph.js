/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 * DFS
 * time: O(N+E) N: nodes; E: edges
 * space: O(N)
 */
var cloneGraph = function(node) {
  let visited = new Map();
  const dfs = function(node) {
    if (node == null) return null;
    if (visited.has(node)) return visited.get(node);
    let cloneNode = new Node(node.val);
    visited.set(node, cloneNode);
    for (let n of node.neighbors) {
      cloneNode.neighbors.push(dfs(n));
    }
    return cloneNode;
  };
  return dfs(node);
};