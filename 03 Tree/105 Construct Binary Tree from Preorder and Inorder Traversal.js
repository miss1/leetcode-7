/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * time: O(nlogn)
 * space: O(h), h为树的高度
 * 从前序遍历中获取根节点，从中序遍历中获取左右子树的起始结束下标，递归
 */
var buildTree = function(preorder, inorder) {
  let getRoot = function(rootIndexPre, start, end) {
    if (end < start) return null;
    let root = preorder[rootIndexPre];
    if (start === end) return new TreeNode(root);
    let rootIndexIn = inorder.indexOf(root);  // O(n)
    let leftLength = rootIndexIn - start;
    return new TreeNode(root, getRoot(rootIndexPre + 1, start, rootIndexIn - 1), getRoot(rootIndexPre + leftLength + 1, rootIndexIn + 1, end))
  };

  return getRoot(0, 0, preorder.length - 1);
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 上面的改进，用map将inorder的value和index存起来; 将let rootIndexIn = inorder.indexOf(root)降为O(1)
 * time: O(n)
 * space: O(h)
 */
var buildTree2 = function(preorder, inorder) {
  const size = preorder.length;
  let map = new Map();
  for (let i = 0; i < size; i++) {
    map.set(inorder[i], i);
  }
  const getRoot = function(rootIndex, start, end) {
    if (start > end) return null;
    const rootVal = preorder[rootIndex];
    if (start === end) return new TreeNode(rootVal);
    let rootInIdex = map.get(rootVal);
    let leftRoot = getRoot(rootIndex + 1, start, rootInIdex - 1);
    let rightRoot = getRoot(rootInIdex - start + rootIndex + 1, rootInIdex + 1, end);
    return new TreeNode(rootVal, leftRoot, rightRoot);
  };
  return getRoot(0, 0, size - 1);
};