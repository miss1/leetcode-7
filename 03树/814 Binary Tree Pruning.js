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
 * @return {TreeNode}
 * 二叉树减枝
 * time: O(n), n是树的节点个数
 * space: O(h), h是树的高度
 */
var pruneTree = function(root) {
    const dfs = function(root) {
        if (!root) return null;
        root.left = dfs(root.left);
        root.right = dfs(root.right);
        return (root.val === 0 && root.left == null && root.right == null) ? null : root;
    };
    return dfs(root);
};