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
 * @return {boolean}
 * BFS检查每一层中的每个数是否符合条件
 * time: O(n)
 * space: O(n)
 */
var isEvenOddTree = function(root) {
  let currentLevel = [root], level = 0;
  while (currentLevel.length > 0) {
    let nextLevel = [];
    for (let i = 0; i < currentLevel.length; i++) {
      if (level % 2 === 0 && currentLevel[i].val % 2 === 0) return false;
      if (level % 2 === 1 && currentLevel[i].val % 2 === 1) return false;
      if (i > 0 && level % 2 === 0 && currentLevel[i].val <= currentLevel[i - 1].val) return false;
      if (i > 0 && level % 2 === 1 && currentLevel[i].val >= currentLevel[i - 1].val) return false;
      if (currentLevel[i].left) nextLevel.push(currentLevel[i].left);
      if (currentLevel[i].right) nextLevel.push(currentLevel[i].right);
    }
    currentLevel = nextLevel;
    level += 1;
  }
  return true;
};