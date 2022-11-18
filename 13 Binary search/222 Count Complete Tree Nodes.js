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
 * @return {number}
 * DFS分别计算node左右子树的node个数
 * time: O(n)
 * space: O(h)
 */
var countNodes = function(root) {
  const nodeNumber = function(root) {
    if (!root) return 0;
    return 1 + nodeNumber(root.left) + nodeNumber(root.right);
  };
  return nodeNumber(root);
};
