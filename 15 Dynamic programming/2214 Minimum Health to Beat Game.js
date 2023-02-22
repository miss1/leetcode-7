/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 * You are playing a game that has n levels numbered from 0 to n - 1. You are given a 0-indexed integer array damage where damage[i] is the amount of health you will lose to complete the ith level.
 *
 * You are also given an integer armor. You may use your armor ability at most once during the game on any level which will protect you from at most armor damage.
 *
 * You must complete the levels in order and your health must be greater than 0 at all times to beat the game.
 *
 * Return the minimum health you need to start with to beat the game.
 *
 * 跟174题类似
 * 假设游戏结束后只剩1点血，从最后一关开始，计算到达每一关时需要剩下的最少血量。
 * arr[i] = damage[i] + arr[i+1]
 * eg: damage = [2,7,4,3], armor = 4
 * 每一关最少血量 arr = [17,15,8,4]  所以初始血量最最少为17
 * 由于armor能抵挡一次伤害，我们使用它抵挡血量花费最高的一关
 * time: O(n)
 * space: O(1)
 */
var minimumHealth = function(damage, armor) {
  let res = 1, max = 0;
  for (let i = damage.length - 1; i >= 0; i--) {
    res += damage[i];
    max = Math.max(max, damage[i]);
  }
  return res - Math.min(max, armor);
};