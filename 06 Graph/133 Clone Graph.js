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
 * BFS
 * time: O(N+E) N: nodes; E: edges
 * space: O(N)
 */
var cloneGraph2 = function(node) {
  if (!node) return null;
  let visited = new Map();
  let queue = [node];
  visited.set(node, new Node(node.val));
  while (queue.length > 0) {
    let nextLevel = [];
    for (let i = 0; i < queue.length; i++) {
      const n = queue[i];
      for (let neighbor of n.neighbors) {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, new Node(neighbor.val));
          nextLevel.push(neighbor);
        }
        visited.get(n).neighbors.push(visited.get(neighbor));
      }
    }
    queue = nextLevel;
  }
  return visited.get(node);
};