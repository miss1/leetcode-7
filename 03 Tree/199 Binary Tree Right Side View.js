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
 * @return {number[]}
 * BFS，记录每一层的最后一个node的value
 * time: O(n)
 * space: O(n) 每一层的节点数
 */
var rightSideView = function(root) {
  if (!root) return [];
  let current = [root], res = [];
  while (current.length > 0) {
    res.push(current[current.length - 1].val);
    let next = [];
    for (let node of current) {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    current = next;
  }
  return res;
};