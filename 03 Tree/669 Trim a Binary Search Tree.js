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
 * @return {TreeNode}
 * DFS先序遍历，当前节点的值小于low时，右子树所有节点都小于low，都要砍掉，直接把左子树挪到当前节点的位置
 * 当前节点的值大于high时，左子树所有节点都大于high，直接把右子树挪到当前节点的位置
 * time: O(n)
 * space: O(h)
 */
var trimBST = function(root, low, high) {
  const preorder = function(node, parents, side) {
    if (!node) return;
    if (node.val < low || node.val > high) {
      let p = node.val < low ? 'right' : 'left';
      if (parents) {
        parents[side] = node[p];
        preorder(parents[side], parents, side);
      } else {
        root = node[p];
        preorder(root, null, null);
      }
    } else {
      preorder(node.left, node, 'left');
      preorder(node.right, node, 'right');
    }
  };
  preorder(root, null, null);
  return root;
};