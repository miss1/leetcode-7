/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 * 后序遍历, dfs
 * time: O(n)
 * space: O(h)
 */
var postorder = function(root) {
  const res = [];
  const dfs = (node) => {
    if (!node) return;
    for (let n of node.children) {
      dfs(n);
    }
    res.push(node.val);
  }
  dfs(root);
  return res;
};