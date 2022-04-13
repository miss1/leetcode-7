/**
 * @param {TreeNode} root
 * @return {number}
 * time: O(n)
 * space: O(n)
 * 先序遍历，记录每个节点所在的层数level
 * 当遍历到叶子节点时，取当前叶子节点的层数，和已记录的最大层数num比较，存储较大值
 */
var maxDepth = function(root) {
  let num = 0;
  let preOrder = function(root, level) {
    if (!root) return;
    if (!root.left && !root.right) num = Math.max(num, level);
    preOrder(root.left, level + 1);
    preOrder(root.right, level + 1);
  };
  preOrder(root, 1);
  return num;
};