/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  let diff = high - low;
  if (low % 2 === 1) diff++;
  if (high % 2 === 1) diff++;
  return diff / 2;
};