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
 * @return {void} Do not return anything, modify root in-place instead.
 * 二叉搜索树的中序遍历是升序的数组。先做一次中序遍历，得到数组arr。再遍历arr找到被交换的两个数val1, val2
 * 再先序遍历树，判断node.val 是否是val1, val2中的一个，是的话修改node.val
 * time: O(n)
 * space: O(n)
 */
var recoverTree = function(root) {
  let arr = [];
  let inorder = function(root) {
    if (!root) return;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  let val1 = null, val2 = null;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      val2 = arr[i + 1];
      if (val1 == null) {
        val1 = arr[i]
      } else {
        break;
      }
    }
  }
  let count = 2;
  let recover = function(root) {
    if (!root || count === 0) return;
    if (root.val === val1 || root.val === val2) {
      root.val = root.val === val1 ? val2 : val1;
      count -= 1;
    }
    if (count === 0) return;
    recover(root.left);
    recover(root.right);
  }
  recover(root);
};

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
 * @return {void} Do not return anything, modify root in-place instead.
 * 跟上面一样的思路。合并前两步，在中序遍历时同时找到被交换的两个数
 * time: O(n)
 * space: O(h) 递归，树的高度
 */
var recoverTree2 = function(root) {
  let preVal = null, val1 = null, val2 = null;
  let inorder = function(root) {
    if (!root) return;
    inorder(root.left);
    if (preVal != null && root.val < preVal) {
      val2 = root.val;
      if (val1 == null) {
        val1 = preVal;
      } else {
        return;
      }
    }
    preVal = root.val;
    inorder(root.right);
  }
  inorder(root);
  let count = 2;
  let recover = function(root) {
    if (!root || count === 0) return;
    if (root.val === val1 || root.val === val2) {
      root.val = root.val === val1 ? val2 : val1;
      count -= 1;
    }
    if (count === 0) return;
    recover(root.left);
    recover(root.right);
  }
  recover(root);
};

