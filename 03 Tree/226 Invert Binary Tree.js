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
 * @return {TreeNode}
 * DFS, 先序遍历，将每个节点的左右子树互换即可
 * time: O(n)
 * space: O(h)
 */
var invertTree = function(root) {
  let dfs = function(root) {
    if (!root) return;
    let left = root.left;
    root.left = root.right;
    root.right = left;
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return root;
};