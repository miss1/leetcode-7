/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 * 遍历判断，累加和
 * time: O(n)
 * space: O(1)
 */
var isWinner = function(player1, player2) {
  let score1 = 0, score2 = 0;
  const n = player1.length;
  for (let i = 0; i < n; i++) {
    if (i === 1) {
      score1 += player1[i - 1] === 10 ? 2 * player1[i] : player1[i];
      score2 += player2[i - 1] === 10 ? 2 * player2[i] : player2[i];
    } else if (i > 1) {
      score1 += player1[i - 1] === 10 || player1[i - 2] === 10 ? 2 * player1[i] : player1[i];
      score2 += player2[i - 1] === 10 || player2[i - 2] === 10 ? 2 * player2[i] : player2[i];
    } else {
      score1 += player1[i];
      score2 += player2[i];
    }
  }
  if (score1 > score2) return 1;
  if (score1 < score2) return 2;
  return 0;
};