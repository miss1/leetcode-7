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
 * DFS 中序遍历，将值存储到数组中即可
 * time: O(n)
 * space: O(n)
 */
var BSTIterator = function(root) {
  const arr = [];
  const inOrder = function(node) {
    if (!node) return;
    inOrder(node.left);
    arr.push(node.val);
    inOrder(node.right);
  };
  inOrder(root);

  this.idx = -1;
  this.data = arr;
};

/**
 * @return {number}
 * time: O(1)
 */
BSTIterator.prototype.next = function() {
  this.idx += 1;
  return this.data[this.idx];
};

/**
 * @return {boolean}
 * time: O(1)
 */
BSTIterator.prototype.hasNext = function() {
  return this.idx < this.data.length - 1;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */