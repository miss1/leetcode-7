/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * dfs遍历，计算每个节点，它的所有后代中目标值的个数，当个数为2时，说明是要找的节点
 * time: O(n)
 * space: O(n) 树的高度，最差情况时为n
 */
var lowestCommonAncestor = function(root, p, q) {
  let node = null;
  const dfs = function(root) {
    if (!root) return false;
    let mid = (root === p || root === q) ? 1 : 0;
    let left = dfs(root.left) ? 1 : 0;
    let right = dfs(root.right) ? 1 : 0;
    let sum = left + right + mid;
    if (sum >= 2) node = root;
    return sum > 0;
  };
  dfs(root);
  return node;
};
