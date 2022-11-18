/**
 * @param {number[]} nums
 * @return {number}
 * 我不理解我大为震撼/(ㄒoㄒ)/~~
 */
var singleNumber = function(nums) {
  let seenOnce = 0, seenTwice = 0;
  for (let i = 0; i < nums.length; i++) {
    seenOnce = ~seenTwice & (seenOnce ^ nums[i]);
    seenTwice = ~seenOnce & (seenTwice ^ nums[i]);
  }
  return seenOnce;
};


/**
 * @param {number[]} nums
 * @return {number}
 * 哈希表
 * time: O(n)
 * space: O(n)
 */
var singleNumber2 = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else map.set(nums[i], + 1);
  }
  for (let item of map) { if (item[1] === 1) return item[0]; }
  return null;
};
