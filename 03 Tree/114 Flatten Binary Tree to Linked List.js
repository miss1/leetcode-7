/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 后序遍历，将每个节点的左子树设置为右子树，左子树置为空，原来的右子树拼接到新的右子树的右边叶子节点后面
 * time: O(n)
 * space: O(h), h为树的高度
 */
var flatten = function(root) {
  let postOrder = function(root) {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    if (root.left) {
      let right = root.right;
      root.right = root.left;
      root.left = null;
      let tail = root;
      while (tail.right) tail = tail.right;
      tail.right = right;
    }
  };
  postOrder(root);
};


/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 循环，从root开始循环，将节点的左子树设置为右子树，左子树置为空，原来的右子树拼接到新的右子树的右边叶子节点后面
 * root = root.right 循环，左子树为空时循环继续，左子树不为空时执行上述操作
 * time: O(n)
 * space: O(1)
 */
var flatten2 = function(root) {
  if (!root) return;
  let node = root;
  while (node) {
    if (node.left) {
      let rigth = node.right;
      node.right = node.left;
      node.left = null;
      let tail = node;
      while (tail.right) tail = tail.right;
      tail.right = rigth;
    }
    node = node.right;
  }
};