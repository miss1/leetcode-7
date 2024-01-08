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
 * @param {number} low
 * @param {number} high
 * @return {number}
 * DFS，求两边的和，相加即可
 * time: O(n)
 * space: O(h)
 */
var rangeSumBST = function(root, low, high) {
  const dfs = (node) => {
    if (!node) return 0;
    const c = node.val === high || node.val === low ? node.val : 0;
    if (node.val >= high) return dfs(node.left) + c;
    if (node.val <= low) return dfs(node.right) + c;
    return dfs(node.left) + dfs(node.right) + node.val;
  };
  return dfs(root);
};