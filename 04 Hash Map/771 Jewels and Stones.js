/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * time: O(n)
 * space: O(n)
 */
var numJewelsInStones = function(jewels, stones) {
  let set = new Set();
  for (let j of jewels) {
    set.add(j);
  }
  let res = 0;
  for (let s of stones) {
    if (set.has(s)) res++;
  }
  return res;
};