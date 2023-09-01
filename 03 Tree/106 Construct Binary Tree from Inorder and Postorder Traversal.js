/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * 从postorder中查找root，最后一位是根节点，根节点前一个是右子树根节点，再减去右子树长度则是左子树根节点
 * 找到root后，再利用inorder可以得到左右子树的长度，从而得到左右子树的root
 * time: O(n)
 * space: O(n)
 */
var buildTree = function(inorder, postorder) {
  let mapping = new Map();
  for (let i = 0; i < inorder.length; i++) {
    mapping.set(inorder[i], i)
  }
  // 参数：root, 当前子树在inorder中的起始位置和结束位置
  let getRoot = function(rootIndex, start, end) {
    if (end < start) return null;
    let root = postorder[rootIndex];
    if (start === end) return new TreeNode(root);
    let mid = mapping.get(root);
    let left = getRoot(rootIndex - 1 - (end - mid), start, mid - 1);
    let right = getRoot(rootIndex - 1, mid + 1, end);
    return new TreeNode(root, left, right);
  }
  return getRoot(postorder.length - 1, 0, inorder.length - 1)
};
