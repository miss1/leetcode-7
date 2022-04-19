/**
 * @param {TreeNode} root
 * @return {boolean}
 * time: O(n)
 * space: O(h) h为树的高度
 * 树围绕中心对称，说明left.left = right.right; left.right = right.left;
 * 递归比较节点的左右节点即可
 */
var isSymmetric = function(root) {
  const compare = function(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val && compare(left.left, right.right) && compare(left.right, right.left);
  };
  return compare(root.left, root.right);
};