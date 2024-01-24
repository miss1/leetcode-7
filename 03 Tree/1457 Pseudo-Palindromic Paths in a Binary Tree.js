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
 * DFS遍历树，找到所有root到leaf的路径，判断是否为回文
 * time: O(n)
 * space: O(h)
 */
var pseudoPalindromicPaths  = function(root) {
  let res = 0;

  // 判断是否为回文，只要偶数数量的值大于1个，说明不是。time: O(10)
  const isPalindromic = function(arr) {
    let odd = 0;
    for (let i = 1; i < 10; i++) {
      if (arr[i] % 2 === 1) odd++;
      if (odd > 1) return false;
    }
    return true;
  }

  // dfs寻找所有路径
  const dfs = function(node, arr) {
    if (!node) return;
    arr[node.val] += 1;
    if (!node.left && !node.right) {
      if (isPalindromic(arr)) res++;
      arr[node.val] -= 1;
      return;
    }
    dfs(node.left, arr);
    dfs(node.right, arr);
    arr[node.val] -= 1;
  }
  dfs(root, new Array(10).fill(0));
  return res;
};