/**
 * @param {TreeNode} root
 * @return {number[][]}
 * BFS, 层序遍历
 * time: O(n)
 * space: O(n)
 */
var levelOrder = function(root) {
  if (!root) return [];
  let res = [];
  let currentLevel = [root];
  while (currentLevel.length > 0) {
    let nextLevel = []; let val = [];
    for (let i = 0; i < currentLevel.length; i++) {
      val.push(currentLevel[i].val);
      if (currentLevel[i].left) nextLevel.push(currentLevel[i].left);
      if (currentLevel[i].right) nextLevel.push(currentLevel[i].right);
    }
    res.push(val);
    currentLevel = nextLevel;
  }
  return res;
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
 * @param {TreeNode} root
 * @return {number[][]}
 * DFS，记录每一层的level值
 * time: O(n)
 * space: O(h)
 */
var levelOrder2 = function(root) {
  let result = [];
  const dfs = function(root, level) {
    if (!root) return;
    if (!result[level]) result[level] = [];
    result[level].push(root.val);
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  };
  dfs(root, 0);
  return result;
};