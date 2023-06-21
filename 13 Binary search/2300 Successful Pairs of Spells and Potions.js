/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 * 二分查找
 * time: O(nlogm + mlogm)
 * space: O(logm)
 */
var successfulPairs = function(spells, potions, success) {
  potions.sort((a, b) => a - b);
  let res = [];
  for (let spell of spells) {
    let low = 0, high = potions.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (potions[mid] * spell >= success) high = mid;
      else low = mid + 1;
    }
    res.push(potions.length - low);
  }
  return res;
};