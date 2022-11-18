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
 * @param {number} k
 * @return {number}
 * 二叉搜索树的中序遍历是一个有序序列，所以中序遍历后，返回第k个数即可
 * time: O(n)
 * space: O(n)
 */
var kthSmallest = function(root, k) {
  let arr = [];
  const inorder = function(root) {
    if (!root) return;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return arr[k - 1];
};
