/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 利用BST的特性，左子树的节点都会小于parent，右子树的节点都会大于parent
 * 根据root.val和p,q的大小，判断下一步改往左走还是往右走
 * time: O(n)
 * space: O(h)
 */
var lowestCommonAncestor = function(root, p, q) {
  let min = Math.min(p.val, q.val), max = Math.max(p.val, q.val);
  const dfs = function(root) {
    if (!root) return null;
    if (root.val === min || root.val === max) return root;
    if (root.val > min && root.val < max) return root;
    if (root.val < min) return dfs(root.right);
    else return dfs(root.left);
  };
  return dfs(root);
};