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
 * 贪心，后序遍历，从树的最底层开始
 * 如果当前节点的子节点没有被监视，那当前节点一定要放相机；如果当前节点没有父节点，且当前节点没有被监视，当前节点需放相机
 * 将已经被监视的节点存储到哈希表，方便判断
 * time: O(n), n: 树的节点个数
 * space: O(h), h: 树的高度
 */
var minCameraCover = function(root) {
  let count = 0, covered = new Set();
  const dfs = function(root, pre) {
    if (!root) return;
    dfs(root.left, root);
    dfs(root.right, root);
    if ((!pre && !covered.has(root)) || (root.left && !covered.has(root.left)) || (root.right && !covered.has(root.right))) {
      count++;
      covered.add(root);
      covered.add(pre);
      covered.add(root.left);
      covered.add(root.right);
    }
  };
  dfs(root, null);
  return count;
};
