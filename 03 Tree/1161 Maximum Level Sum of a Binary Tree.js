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
 * BFS，累计每一层的和，找最大值
 * time: O(n)
 * space: O(n)
 */
var maxLevelSum = function(root) {
  let level = 1, res = 1, maxSum = root.val;
  let current = [root];
  while (current.length > 0) {
    let next = [], sum = 0;
    for (let node of current) {
      sum += node.val;
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    if (sum > maxSum) {
      maxSum = sum;
      res = level;
    }
    current = next;
    level += 1;
  }
  return res;
};