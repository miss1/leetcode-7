/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * time: O(n)
 * space: O(n)
 * 同时前序遍历两个二叉树，比较两个treeNode的值
 * 不相等返回false，如果两个node同时为空，说明完全相等，返回true
 */
var isSameTree = function(p, q) {
  return preorder(p, q);
};

let preorder = function(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null || p.val !== q.val) return false;
  let left = preorder(p.left, q.left);
  if (!left) return false;
  return preorder(p.right, q.right);
};