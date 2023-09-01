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
 * @return {number[][]}
 * BFS，记录每一层的数据，再反转数组
 * time: O(n)
 * space: O(n)
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  let res = [];
  let currentLevel = [root];
  while (currentLevel.length > 0) {
    let nextLevel = [], currentVal = [];
    for (let node of currentLevel) {
      currentVal.push(node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    res.push(currentVal);
    currentLevel = nextLevel;
  }
  return res.reverse();
};
