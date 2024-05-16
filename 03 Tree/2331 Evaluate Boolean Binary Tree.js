/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * DFS
 * time: O(n)
 * space: O(h)
 */
var evaluateTree = function(root) {
  const dfs = function(node) {
    if (!node.left && !node.right) return node.val !== 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    return node.val === 2 ? (left || right) : (left && right);
  };
  return dfs(root);
};
