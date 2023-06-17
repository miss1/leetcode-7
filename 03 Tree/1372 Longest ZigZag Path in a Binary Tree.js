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
 * DFS，对于每一个节点，有两种结果。1，以当前节点为起点；2，根据前一个节点的方向确定路线
 * dfs，同时记录向左走和向右走时当前的Zigzag length长度
 * 如果当前选择left，则长度等于前一个node的right + 1，并且当前right为0；反之同理
 * time: O(n)
 * space: O(h)
 */
var longestZigZag = function(root) {
  let res = 0;
  const dfs = function(root, left, right) {
    if (!root) return;
    res = Math.max(res, left, right);
    if (root.left) dfs(root.left, right + 1, 0);
    if (root.right) dfs(root.right, 0, left + 1);
  };
  dfs(root, 0, 0);
  return res;
};