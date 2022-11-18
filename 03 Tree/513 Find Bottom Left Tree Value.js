/**
 * @param {TreeNode} root
 * @return {number}
 * time: O(n)
 * space: O(q), q为队列长度
 * BFS, 层序遍历，用一个队列记录每一层的所有节点，队列的第一个数据就是该层最左边的节点
 */
var findBottomLeftValue = function(root) {
  let currentLevel = [root];
  let res = root.val;
  while(currentLevel.length > 0) {
    let nextLevel = [];
    for (let i = 0; i < currentLevel.length; i++) {
      if (currentLevel[i].left) nextLevel.push(currentLevel[i].left);
      if (currentLevel[i].right) nextLevel.push(currentLevel[i].right);
    }
    if (nextLevel.length > 0) res = nextLevel[0].val;
    currentLevel = nextLevel;
  }
  return res;
};