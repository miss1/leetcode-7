/**
 * @param {TreeNode} root
 * @return {number}
 * time: O(n)
 * space: O(n)
 * 先序遍历，拼接前一个结点的值和当前节点的值
 * 直到叶子节点，这条路径的值即拼接完毕，将拼接的字符串转换成Number后添加到结果res中
 */
var sumNumbers = function(root) {
  let res = 0;
  let preOrder = function(root, preVal) {
    if(!root) return;
    let num = preVal + root.val;
    if (!root.left && !root.right) res += parseInt(num);
    preOrder(root.left, num);
    preOrder(root.right, num);
  };
  preOrder(root, '');
  return res;
};