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
 * @param {number} val
 * @return {TreeNode}
 * 二叉搜索树，从根节点开始，比较节点的值和val的值，如果相等，则说明找到了，直接返回。如果root.val大于val，说明需要在左子树中继续寻找
 * 反之在右子树中寻找
 * time: O(h)
 * space: O(1)
 */
var searchBST = function(root, val) {
  while (root) {
    if (root.val === val) return root;
    if (root.val < val) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return null;
};