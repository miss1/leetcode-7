/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 * 注意题目要求，选手每次都会做出最优选择。
 * 回溯，暴力解法。会超时
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (desiredTotal <= maxChoosableInteger) return true;
  let sum = 0;
  for (let i = 1; i <= maxChoosableInteger; i++) sum += i;
  if (sum < maxChoosableInteger) return false;
  // set: 当前已选择过的数；total：当前的数字和
  const backTrack = function(set, total) {
    // 说明对手已经达到了desiredTotal，对手赢了
    if (total >= desiredTotal) return false;
    // 全部数字都被选完了，没得选了，输了
    if (set.size === maxChoosableInteger) return false;
    for (let i = 1; i <= maxChoosableInteger; i++) {
      if (set.has(i)) continue;
      set.add(i);
      // 我当前做出的选择中只要有一种让对手输了，我就赢了（因为每次选择都会选择最利于自己的）
      if (!backTrack(set, total + i)) {
        set.delete(i);
        return true;
      }
      set.delete(i);
    }
    return false;
  };
  return backTrack(new Set(), 0);
};
