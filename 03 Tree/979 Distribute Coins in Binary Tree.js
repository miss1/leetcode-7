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
 * DFS
 * 对于每个点，获取它左边子节点和右边子节点保留1之后，还剩多少，差值都需要移动
 * time: O(n)
 * space: O(h)
 */
var distributeCoins = function(root) {
  let res = 0;
  const dfs = function(node) {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    let t = left + right + node.val - 1;  // 计算差值
    res += Math.abs(t);  // 差值需移动
    return t;  // 将差值移动到上一级
  }
  dfs(root);
  return res;
};
