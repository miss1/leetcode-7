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
 * @param {number} k
 * @return {boolean}
 * 中序遍历获取sorted array
 * 然后双指针查找
 * time: O(n)
 * space: O(n)
 */
var findTarget = function(root, k) {
  const arr = [];
  const dfs = function(node) {
    if (!node) return;
    dfs(node.left);
    arr.push(node.val);
    dfs(node.right);
  }
  dfs(root);

  let i = 0, j = arr.length - 1;
  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === k) return true;
    if (sum < k) i++;
    else j--;
  }
  return false;
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
 * @param {number} k
 * @return {boolean}
 * DFS遍历，将遍历的值存到set中，每次遍历到新值时，判断对应的值是否在set中
 * time: O(n)
 * space: O(n)
 */
var findTarget2 = function(root, k) {
  const set = new Set();

  const dfs = function(node) {
    if (!node) return false;

    if (set.has(k - node.val)) return true;
    set.add(node.val);

    return dfs(node.left) || dfs(node.right);
  }
  return dfs(root);
};