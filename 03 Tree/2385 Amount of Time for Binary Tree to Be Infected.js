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
 * @param {number} start
 * @return {number}
 * 先DFS遍历node，给每个node设置preNode
 * 再BFS遍历，从start开始，计算一共有多少层
 * time: O(n)
 * space: O(n)
 */
var amountOfTime = function(root, start) {
  let s = null;

  const dfs = (node, preNode) => {
    if (!node) return;
    if (node.val === start) s = node;
    node.pre = preNode;
    dfs(node.left, node);
    dfs(node.right, node);
  };
  dfs(root, null);

  let current = [s], visited = new Set([s]), res = -1;
  while (current.length > 0) {
    let next = [];
    for (let n of current) {
      if (n.left && !visited.has(n.left)) {
        next.push(n.left);
        visited.add(n.left);
      }
      if (n.right && !visited.has(n.right)) {
        next.push(n.right);
        visited.add(n.right);
      }
      if (n.pre && !visited.has(n.pre)) {
        next.push(n.pre);
        visited.add(n.pre);
      }
    }
    current = next;
    res++;
  }
  return res;
};