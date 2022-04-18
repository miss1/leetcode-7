/**
 * @param {TreeNode} root
 * @return {number[][]}
 * BFS, 层序遍历，增加一个tag值，标记当前层的方向，true为从左到右，false为从右到左
 * 左到右时，存储val时跟currentLevel的顺序一样，右到左时，存储val时从currentLevel的尾部开始存
 * time: O(n)
 * space: O(n)
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let res = [], tag = true;
  let currentLevel = [root];
  while (currentLevel.length > 0) {
    let nextLevel = [], val = [];
    let num = tag ? 0 : currentLevel.length - 1;
    for (let i = 0; i < currentLevel.length; i++) {
      val.push(currentLevel[num].val);
      if (currentLevel[i].left) nextLevel.push(currentLevel[i].left);
      if (currentLevel[i].right) nextLevel.push(currentLevel[i].right);
      num = tag ? num + 1 : num - 1;
    }
    res.push(val);
    tag = !tag;
    currentLevel = nextLevel;
  }
  return res;
};