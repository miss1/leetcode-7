/**
 * @param {TreeNode} root
 * @return {number}
 * BFS, 层序遍历，队列记录每一层的节点，并记录当前层数，遍历队列，找到第一个叶子节点时返回当前层数
 * time: O(n)
 * space: O(q), q为队列长度
 */
var minDepth = function(root) {
  if (!root) return 0;
  let depth = 1;
  let currentLevel = [root];
  while (currentLevel.length > 0) {
    let nextLevel = [];
    for (let i = 0; i < currentLevel.length; i++) {
      if (!currentLevel[i].left && !currentLevel[i].right) return depth;
      if (currentLevel[i].left) nextLevel.push(currentLevel[i].left);
      if (currentLevel[i].right) nextLevel.push(currentLevel[i].right);
    }
    currentLevel = nextLevel;
    depth++;
  }
  return depth;
};