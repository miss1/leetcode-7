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
 * 对于每一个node，获取左边和右边的最大值和最小值。再跟node.val比较，获取当前的最大值跟最小值。再用maxVal和minVal跟node.val相减
 * time: O(n)
 * space: O(h)
 */
var maxAncestorDiff = function(root) {
  let res = 0;
  const dfs = (node) => {
    if (!node) return [Infinity, -Infinity];
    let [leftMin, leftMax] = dfs(node.left);
    let [rightMin, rightMax] = dfs(node.right);
    let cMin = Math.min(leftMin, rightMin, node.val);
    let cMax = Math.max(leftMax, rightMax, node.val);
    res = Math.max(res, Math.abs(node.val - cMin), Math.abs(node.val - cMax));
    return [cMin, cMax];
  };
  dfs(root);
  return res;
};
