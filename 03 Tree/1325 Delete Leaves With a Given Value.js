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
 * @param {number} target
 * @return {TreeNode}
 * DFS
 * 对于每个node，判断它是否需要被删除，如过要删除，则return true，让它的父节点删除它
 * time: O(n)
 * space: O(h)
 */
var removeLeafNodes = function(root, target) {
  const dfs = function(node) {
    if (!node) return true;
    if (dfs(node.left)) node.left = null;
    if (dfs(node.right)) node.right = null;
    return node.left == null && node.right == null && node.val === target;
  };
  return dfs(root) ? null : root;
};
