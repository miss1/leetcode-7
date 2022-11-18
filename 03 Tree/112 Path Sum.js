/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * time: O(n)
 * space: O(h), h是树的高度
 * 先序遍历，累积存储每个节点和前一节点的和
 * 当遇到叶子节点时说明走完了一条路径，此时判断当前的总和sum是否等于targetSum
 */
var hasPathSum = function(root, targetSum) {
  let res = false;
  let preOrder = function(root, preVal) {
    if (!root) return;
    let sum = root.val + preVal;
    if (!root.left && !root.right && sum === targetSum) {
      res = true;
      return;
    }
    preOrder(root.left, sum);
    preOrder(root.right, sum);
  };
  preOrder(root, 0);
  return res;
};