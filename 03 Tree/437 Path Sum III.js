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
 * @param {number} targetSum
 * @return {number}
 * DFS + prefix sum
 * dfs遍历树，记录当前路径的前缀和，将前缀和存储到hashmap中，计算当前的总和值与targetSum的差值，再从hashmap中查找是否存在这个差值
 * time: O(n)
 * space: O(n)
 */
var pathSum = function(root, targetSum) {
  let res = 0, map = new Map();
  const dfs = function(root, sum) {
    if (!root) return;
    let currentSum = root.val + sum;
    let t = currentSum - targetSum;
    if (t === 0) res += 1;
    if (map.has(t)) res += map.get(t);
    map.set(currentSum, map.has(currentSum) ? map.get(currentSum) + 1 : 1);
    dfs(root.left, currentSum);
    dfs(root.right, currentSum);
    if (map.get(currentSum) > 1) map.set(currentSum, map.get(currentSum) - 1);
    else map.delete(currentSum);
  };
  dfs(root, 0);
  return res;
};