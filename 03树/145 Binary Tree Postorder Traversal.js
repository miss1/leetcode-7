/**
 * @param {TreeNode} root
 * @return {number[]}
 * 后序遍历，迭代
 * time: O(n)
 * space: O(n)
 */
var postorderTraversal = function(root) {
  let white = 0, gray = 1;
  let num = [];
  let stack = [{color: white, node: root}];
  while (stack.length > 0) {
    const {color, node} = stack.pop();
    if (!node) continue;
    if (color === white) {
      stack.push({color: gray, node: node});
      stack.push({color: white, node: node.right});
      stack.push({color: white, node: node.left});
    } else {
      num.push(node.val);
    }
  }
  return num;
};