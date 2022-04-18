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