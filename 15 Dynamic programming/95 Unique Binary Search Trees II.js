/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 * 跟96题一个思路
 * 从1 - n，当每个数i为root时
 * 左子树的节点数为 start ~ i-1; 右子树的节点为：i+1 ~ end; 由此可以递归调用generate获取左右子树分别可以有多少种组合
 * 问题变成 左边有leftTrees种组合，右边有rightTrees种组合。一共能有多少种组合。两个循环逐个进行组合即可
 */
var generateTrees = function(n) {
  const generate = function(start, end) {
    let res = [];
    if (start > end) return [null];

    for (let i = start; i <= end; i++) {
      let leftTrees = generate(start, i - 1);
      let rightTrees = generate(i + 1, end);

      for (let left of leftTrees) {
        for (let right of rightTrees) {
          res.push(new TreeNode(i, left, right));
        }
      }
    }
    return res;
  };
  return generate(1, n);
};