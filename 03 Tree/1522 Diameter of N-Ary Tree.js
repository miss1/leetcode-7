/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 * 求多叉树的直径。跟二叉树一个思路，dfs求出每一个分叉的深度，取最大的两个，相加就是直径。dfs返回最大深度
 * time: O(n)
 * space: O(h)
 */
var diameter = function(root) {
  let res = 0;
  const dfs = function(root) {
    if (!root) return 0;
    let d1 = 0, d2 = 0;
    for (let node of root.children) {
      let dep = dfs(node);
      if (dep >= d1) {
        d2 = d1;
        d1 = dep;
      } else if (dep >= d2) {
        d2 = dep;
      }
    }
    res = Math.max(res, d1 + d2);
    return Math.max(d1, d2) + 1;
  };
  dfs(root);
  return res;
};