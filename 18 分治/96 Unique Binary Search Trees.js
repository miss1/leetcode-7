/**
 * @param {number} n
 * @return {number}
 * 遍历1到n的数，求出只有前i个数时拥有的BST个数，存储到res中
 * 遍历1到i，当前数j为root时，BST的个数为左子树节点个数(j-1)能形成的BST个数乘以右子树节点个数(i-j)能形成的BST个数；相乘是因为左右两边排列组合
 * 比如n=3时，只有1一个数时，BST个数res[1] = 1；数字为1，2时，1为root，左边0个节点，右边一个节点，2为root时同理，所以res[2] = res[0]*res[1] + res[1]*res[0]
 * time: O(n²)
 * space: O(n)
 */
var numTrees = function(n) {
  let res = [1];
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      count += res[j - 1] * res[i - j];
    }
    res[i] = count;
  }
  return res[n];
};
