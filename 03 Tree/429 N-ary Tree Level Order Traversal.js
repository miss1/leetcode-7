/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 * BFS
 * time: O(n)
 * space: O(n)
 */
var levelOrder = function(root) {
  if (!root) return [];
  let current = [root], res = [[root.val]];
  while (current.length > 0) {
    let next = [], nextVal = [];
    for (let r of current) {
      for (let node of r.children) {
        next.push(node);
        nextVal.push(node.val);
      }
    }
    if (nextVal.length > 0) res.push(nextVal);
    current = next;
  }
  return res;
};