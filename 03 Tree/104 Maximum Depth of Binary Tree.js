/**
 * @param {TreeNode} root
 * @return {number}
 * time: O(n)
 * space: O(h), h为树的高度
 * 先序遍历，记录每个节点所在的层数level
 * 当遍历到叶子节点时，取当前叶子节点的层数，和已记录的最大层数num比较，存储较大值
 */
var maxDepth = function(root) {
  let num = 0;
  let preOrder = function(root, level) {
    if (!root) return;
    if (!root.left && !root.right) num = Math.max(num, level);
    preOrder(root.left, level + 1);
    preOrder(root.right, level + 1);
  };
  preOrder(root, 1);
  return num;
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
 * @return {number}
 * DFS, 计算得到左子树和右子树的深度，取更大值
 * time: O(n)
 * space: O(h)
 */
var maxDepth2 = function(root) {
  const dfs = function(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    return Math.max(left, right) + 1;
  };
  return dfs(root)
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
 * @return {number}
 * BFS
 * time: O(n)
 * space: O(n)
 */
var maxDepth3 = function(root) {
  if (!root) return 0;
  let res = 0, current = [root];
  while (current.length > 0) {
    res++;
    let next = [];
    for (let n of current) {
      if (n.left) next.push(n.left);
      if (n.right) next.push(n.right);
    }
    current = next;
  }
  return res;
};