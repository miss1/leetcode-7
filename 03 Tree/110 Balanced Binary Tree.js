/**
 * @param {TreeNode} root
 * @return {boolean}
 * time: O(n)
 * space: O(h), h为树的高度
 * 先序遍历，返回每个节点的高度（节点高度等于左子树高度与右子树高度的最大值）
 * 比较左右子树的高度，超过1说明是false
 */
var isBalanced = function(root) {
  let res = true;
  let preOrder = function(root) {
    if (!root) return 0;
    let left = preOrder(root.left);
    let right = preOrder(root.right);
    if (Math.abs(left - right) > 1) res = false;
    return Math.max(left, right) + 1;
  };
  preOrder(root);
  return res;
};