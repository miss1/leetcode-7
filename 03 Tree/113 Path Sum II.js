/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 * 递归先序遍历
 * 在112题的基础上 增加数组arr记录路径经过的值，递归返回上一节点时arr.pop 确保arr中记录的节点正确
 * 当遇到叶子节点时，比较sum和targetSum，若相等，说明当前arr是一个解，将arr深拷贝到结果res中
 * time: O(n)
 * space: O(h), h是树的高度
 */
var pathSum = function(root, targetSum) {
  let res = [], arr = [];
  let preOrder = function(root, preVal) {
    if (!root) return;
    arr.push(root.val);
    let sum = preVal + root.val;
    if (!root.left && !root.right && sum === targetSum) res.push(JSON.parse(JSON.stringify(arr)));
    preOrder(root.left, sum);
    preOrder(root.right, sum);
    arr.pop();
  };
  preOrder(root, 0);
  return res;
};