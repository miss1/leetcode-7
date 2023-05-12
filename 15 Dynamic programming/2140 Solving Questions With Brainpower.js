/**
 * @param {number[][]} questions
 * @return {number}
 * 动态规划，用一个数组memo记录当以下标i为起点时，能得到的maximum points
 * 从questions的尾部开始遍历，记录当前question为起点时，能得到的最大值
 * 对于question[i], 我们可以选择跳过他或者不跳过
 * 假设我们要solve question[i]，point等于 question[i][0] 加上它跳过question[i][1]个数之后d的那个question的最大point
 * 假设要跳过，point 等于它下一个question能得到的最大值
 * f(n) = Math.max(questions[n][0] + f(n + questions[n][1] + 1), f(n + 1))
 * time: O(n);
 * space: O(n)
 */
var mostPoints = function(questions) {
  let len = questions.length;
  let memo = new Array(len).fill(0);
  for (let i = len - 1; i >= 0; i--) {
    let cur = questions[i][0];
    if (questions[i][1] + i + 1 < len) cur += memo[questions[i][1] + i + 1];
    if (i === len - 1) {
      memo[i] = cur;
    } else {
      memo[i] = Math.max(cur, memo[i + 1]);
    }
  }
  return memo[0];
};