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
 * dfs，当找到一个目标节点时，返回该节点。
 * 如果node的左右两边都返回了节点(找到了目标)，说明当前node就是LCA。如果只有一边返回了节点，说明该节点就是LCA
 * time: O(n)
 * space: O(h)
 */
var lowestCommonAncestor2 = function(root, p, q) {
  const dfs = function(root) {
    if (!root) return null;
    if (root === p || root === q) return root;

    let left = dfs(root.left);
    let right = dfs(root.right);

    if (left && right) return root;
    if (left) return left;
    if (right) return right;
  };
  return dfs(root);
};
