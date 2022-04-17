/**
 * @param {Node} root
 * @return {Node}
 * BFS, 层序遍历，用队列记录每一层的所有节点，遍历每一层节点，将前一个next指向下一个
 * time: O(n)
 * space: O(q), q为队列长度
 * 因为每一个节点的子节点数不确定，不适合用深度遍历解
 */
var connect = function(root) {
  if (!root) return root;
  let currentLevel = [root]
  while (currentLevel.length > 0) {
    let nextLevel = [];
    for (let i = 0; i < currentLevel.length; i++) {
      if (currentLevel[i].left) nextLevel.push(currentLevel[i].left);
      if (currentLevel[i].right) nextLevel.push(currentLevel[i].right);
      if (i === currentLevel.length - 1) currentLevel[i].next = null;
      else currentLevel[i].next = currentLevel[i + 1];
    }
    currentLevel = nextLevel;
  }
  return root;
};