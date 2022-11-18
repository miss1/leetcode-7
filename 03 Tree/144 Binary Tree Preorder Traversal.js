/**
 * @param {TreeNode} root
 * @return {number[]}
 * 先序遍历，迭代
 * time: O(n)
 * space: O(n)
 */
var preorderTraversal = function(root) {
  let white = 0, gray = 1;
  let num = [];
  let stack = [{color: white, node: root}];
  while (stack.length > 0) {
    const {color, node} = stack.pop();
    if (!node) continue;
    if (color === white) {
      stack.push({color: white, node: node.right});
      stack.push({color: white, node: node.left});
      stack.push({color: gray, node: node});
    } else {
      num.push(node.val);
    }
  }
  return num;
};