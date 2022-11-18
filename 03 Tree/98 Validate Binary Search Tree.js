/**
 * @param {TreeNode} root
 * @return {boolean}
 * time: O(n)
 * space: O(n)
 * 二叉搜索树的中序遍历结果是一个有序列表
 * 中序遍历，只要当前节点的值小于等于前一个节点的值，则说不是有序列表，不是二叉搜索树
 */
var isValidBST = function(root) {
  let res = [];
  return inorder(root, res);
};

let inorder = function(root, res) {
  if (!root) return true;
  let isLeftValid = inorder(root.left, res);
  if (!isLeftValid) return false;
  if (res.length > 0 && root.val <= res[res.length - 1]) {
    res.push(root.val);
    return false;
  } else {
    res.push(root.val);
  }
  return inorder(root.right, res);
};