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
 * @param {TreeNode} subRoot
 * @return {boolean}
 * dfs, 判断两个树是否相等，不相等的话，继续判断root.left和subRoot，root.right和subRoot
 */
var isSubtree = function(root, subRoot) {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = (n1, n2) => {
  if (!n1 && !n2) return true;
  if (!n1 || !n2 || n1.val !== n2.val) return false;
  return isSameTree(n1.left, n2.left) && isSameTree(n1.right, n2.right);
};