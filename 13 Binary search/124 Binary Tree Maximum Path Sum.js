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
 * 求值最大的路径。DFS，记录到达当前节点时能得到的最大值
 * 当左（右）节点的sum小于0时，直接舍弃，不往下走（返回0）
 * time: O(n)
 * space: O(h)
 */
function maxPathSum(root) {
  let maxPath = -Infinity;
  const sumFromSubtree = function(node) {
    if (!node) {
      return 0;
    }
    // Get the maximum value of the left subtree. discard if less than 0
    let sumFromLeft = Math.max(sumFromSubtree(node.left), 0);
    // Get the maximum value of the right subtree. discard if less than 0
    let sumFromRight = Math.max(sumFromSubtree(node.right), 0);
    // maximum value
    maxPath = Math.max(maxPath, sumFromLeft + sumFromRight + node.val);
    // The maximum value that can be obtained when reaching the current node
    return Math.max(sumFromLeft + node.val, sumFromRight + node.val);
  };
  sumFromSubtree(root);
  return maxPath;
}