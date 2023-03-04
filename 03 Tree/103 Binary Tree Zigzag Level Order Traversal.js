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
 * DFS。传入一个level值表示当前的层数。
 * 当层数为偶数时，从左到右。将val值添加到result[level]的末尾
 * 当层数为奇数时，从右到左。将val值添加到result[level]头部
 * time: O(n)
 * space: O(h)
 */
var zigzagLevelOrder2 = function(root) {
  let result = [];
  const dfs = function(root, level) {
    if (!root) return;
    if (!result[level]) result[level] = [];
    if (level % 2 === 0) result[level].push(root.val);
    else result[level].unshift(root.val);
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  };
  dfs(root, 0);
  return result;
};