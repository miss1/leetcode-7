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
 * @return {string[]}
 * DFS, 获取node左右两边的path，然后组合到一起
 * time: O(n)
 * space: O(n)
 */
var binaryTreePaths = function(root) {
  const dfs = function(node) {
    if (!node) return [];
    const left = dfs(node.left);
    const right = dfs(node.right);
    const arr = [...left, ...right];
    if (arr.length === 0) return [node.val+''];
    return arr.map(val => node.val + '->' + val);
  };

  return dfs(root);
};