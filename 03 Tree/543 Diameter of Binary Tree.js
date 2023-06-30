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
 * @return {number}
 * dfs, 获取左子树和右子树的深度，返回最大值（获取当前节点的最大深度）
 * 要求的值为root的左边最大深度加上右边最大深度
 * time: O(n)
 * space: O(h)
 */
var diameterOfBinaryTree = function(root) {
  let res = 0;
  const dfs = function(root) {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    res = Math.max(res, left + right);
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return res;
};