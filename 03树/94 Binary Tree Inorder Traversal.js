/**
 * @param {TreeNode} root
 * @return {number[]}
 * time: O(n)
 * space: O(h), h为树的高度
 * 递归，中序遍历
 */
var inorderTraversal = function(root) {
  let res = [];
  return inorder(root, res);
};

let inorder = function(root, res) {
  if (!root) return res;
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
  return res;
}