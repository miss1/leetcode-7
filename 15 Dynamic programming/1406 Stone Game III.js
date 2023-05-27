/**
 * @param {number[]} stoneValue
 * @return {string}
 * Bottom-Up Dynamic Programming
 * 从stoneValue最后一个开始遍历，假设以当前item为起点时，dp[i]记录value(A) - value(B)的值
 * 每当往前遍历一个item时，最开始的item一定是属于A，每次选择，A有三个选项，选1堆，2堆或者三堆
 * stoneValue = [1,2,3,7,2].
 * dp[i]表示以i为起点，A选择i，A的总分数value(A)减去B的总分数value(B)
 * 所以dp[i + 1]为，B做选择选择了i+1，B的总分数value(B)减去A的总分数value(A)
 * 所以，如果当前A只选择i，则 dp[i+1] = value(B) - value(A)
 * 如果A选择i和i+1，则 dp[i+2] = value(B) - value(A)
 * 如果A选择i，i+1和i+2，则 dp[i+3] = value(B) - value(A)
 * time: O(n)
 * space: O(n)
 */
var stoneGameIII = function(stoneValue) {
  const len = stoneValue.length;
  let dp = new Array(len + 1).fill(0);
  for (let i = len - 1; i >= 0; i--) {
    let num = stoneValue[i] - dp[i + 1];
    if (i + 1 < len) num = Math.max(num, stoneValue[i] + stoneValue[i + 1] - dp[i + 2]);
    if (i + 2 < len) num = Math.max(num, stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[i + 3]);
    dp[i] = num;
  }
  if (dp[0] === 0) return 'Tie';
  return dp[0] > 0 ? 'Alice' : 'Bob';
};