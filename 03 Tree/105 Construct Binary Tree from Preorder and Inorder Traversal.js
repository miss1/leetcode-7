/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * time: O(n)
 * space: O(h), h为树的高度
 * 从前序遍历中获取根节点，从中序遍历中获取左右子树的起始结束下标，递归
 */
var buildTree = function(preorder, inorder) {
  let getRoot = function(rootIndexPre, start, end) {
    if (end < start) return null;
    let root = preorder[rootIndexPre];
    if (start === end) return new TreeNode(root);
    let rootIndexIn = inorder.indexOf(root);
    let leftLength = rootIndexIn - start;
    return new TreeNode(root, getRoot(rootIndexPre + 1, start, rootIndexIn - 1), getRoot(rootIndexPre + leftLength + 1, rootIndexIn + 1, end))
  };

  return getRoot(0, 0, preorder.length - 1);
};