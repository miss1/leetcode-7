/**
 * @param {number} n
 * @return {number}
 * n = 1 -> res = 1;
 * n = 2 -> root = 1 时 -> 左子树0个节点，右子树1个节点 -> 1个节点时res = 1; root = 2时同理，所以 1 + 1 = 2
 * n = 3 -> root = 1 时 -> 左子树0，右子树2 -> 2...
 * 用数组记录当n从小到大时，能生成多少个树。当n为较大值时，我们已知所有小于n的数的输出结果
 * 所以只要计算出当root = j时，左子树和右子树分别有多少个节点，左子树：j - 1; 右子树：n - j;
 * 问题变成 左边有res[j-i]种组合，右边有res[n-j]种组合。一共能有多少种组合。数学问题，相乘即可
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
