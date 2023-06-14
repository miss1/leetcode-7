/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 * 深度遍历，记录下叶子节点的值存储到数组。最后比较两个数组是否相等
 * time: O(n)
 * space: O(n)
 */
var leafSimilar = function(root1, root2) {
  let seq1 = [], seq2 = [];
  const dfs = function(root, res) {
    if (!root) return;
    if (!root.left && !root.right) {
      res.push(root.val);
      return;
    }
    dfs(root.left, res);
    dfs(root.right, res);
  };
  dfs(root1, seq1);
  dfs(root2, seq2);
  if (seq1.length !== seq2.length) return false;
  for (let i = 0; i < seq1.length; i++) {
    if (seq1[i] !== seq2[i]) return false;
  }
  return true;
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar2 = function(root1, root2) {
  const dfs = function(root) {
    if (!root) return '';
    if (!root.left && !root.right) return root.val + ',';
    return dfs(root.left) + dfs(root.right);
  }
  return dfs(root1) === dfs(root2);
};