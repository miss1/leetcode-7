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
 * DFS, 同时记录当前的最大值，比较root.val和最大值的大小
 * time: O(n)
 * space: O(h)
 */
var goodNodes = function(root) {
  let res = 0;
  const dfs = function(root, max) {
    if (!root) return;
    if (root.val >= max) res++;
    dfs(root.left, Math.max(root.val, max));
    dfs(root.right, Math.max(root.val, max));
  };
  dfs(root, root.val);
  return res;
};