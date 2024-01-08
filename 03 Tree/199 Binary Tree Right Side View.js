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
 * @return {number[]}
 * BFS，记录每一层的最后一个node的value
 * time: O(n)
 * space: O(n) 每一层的节点数
 */
var rightSideView = function(root) {
  if (!root) return [];
  let current = [root], res = [];
  while (current.length > 0) {
    res.push(current[current.length - 1].val);
    let next = [];
    for (let node of current) {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    current = next;
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
 * @return {number[]}
 * DFS, 先序遍历
 * res存储每一层的值（对于每一层，后面的值覆盖前面的值，最后留下的就是每一层最右边的值）
 * time: O(n)
 * space: O(h)
 */
var rightSideView2 = function(root) {
  let res = [];
  const dfs = (level, node) => {
    if (!node) return;
    res[level] = node.val;
    dfs(level + 1, node.left);
    dfs(level + 1, node.right);
  };
  dfs(0, root);
  return res;
};