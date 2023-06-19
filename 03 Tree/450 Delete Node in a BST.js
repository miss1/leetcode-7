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
 * @param {number} key
 * @return {TreeNode}
 * 判断当前node的值跟key的大小，如果node.val小于key，说明key在右子树，
 * 接着判断node.right的值和key的大小，如果相等则删除right，不相等则从右子树中继续寻找。
 * 如果node.val大于key，同样的方法从左子树中寻找
 * 删除子节点时，将子节点的left放到right的最左边
 * time: O(logn)
 * space: O(h)
 */
var deleteNode = function(root, key) {
  if (!root) return root;
  if (root.val === key) return removeNode(root);
  let node = root;
  while (node) {
    if (node.val < key) {
      if (node.right && node.right.val === key) {
        node.right = removeNode(node.right);
        return root;
      } else {
        node = node.right;
      }
    } else {
      if (node.left && node.left.val === key) {
        node.left = removeNode(node.left);
        return root;
      } else {
        node = node.left;
      }
    }
  }
  return root;
};

let removeNode = function(node) {
  let r = node.right;
  if (!node.right) {
    r = node.left;
    node.left = null;
  } else {
    let p = node.right;
    while (p.left) p = p.left;
    p.left = node.left;
    node.left = null;
    node.right = null;
  }
  return r;
}