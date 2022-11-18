/**
 * @param {Node} root
 * @return {Node}
 * BFS, 层序遍历，用队列记录每一层的所有节点，遍历每一层节点，将前一个next指向下一个
 * time: O(n)
 * space: O(q), q为队列长度
 * 这一解法也是117题的答案
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


/**
 * @param {Node} root
 * @return {Node}
 * DFS, 先序遍历，将每一个节点的left.next指向right，right.next指向当前节点的next.left
 * time: O(n)
 * space: O(h), h为树的高度
 */
var connect2 = function(root) {
  if(root) root.next = null;
  let preOrder = function(root) {
    if(!root) return;
    if(root.left) root.left.next = root.right;
    if(root.right) root.right.next = root.next ? root.next.left : null;
    preOrder(root.left);
    preOrder(root.right);
  };
  preOrder(root);
  return root;
};