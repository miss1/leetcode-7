/**
 * @param {number[]} nums
 * @return {number[]}
 * hashmap存储每个数字的数量
 * 最多只有两个答案
 * time: O(n)
 * space: O(n)
 */
var majorityElement = function(nums) {
  const map = new Map(), res = [];
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
    if (map.get(n) > nums.length / 3 && !res.includes(n)) res.push(n);
  }
  return res;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 * Boyer-Moore Voting Algorithm
 * time: O(n)
 * space: O(1)
 */
var majorityElement2 = function(nums) {
  let c1 = null, c2 = null, count1 = 0, count2 = 0;
  for (let n of nums) {
    if (n === c1) {
      count1++;
    } else if (n === c2) {
      count2++;
    } else if (count1 === 0) {
      c1 = n;
      count1 = 1;
    } else if (count2 === 0) {
      c2 = n;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  let t1 = 0, t2 = 0;
  for (let n of nums) {
    if (n === c1) t1++;
    if (n === c2) t2++;
  }

  const res = [];
  if (t1 > nums.length / 3) res.push(c1);
  if (t2 > nums.length / 3) res.push(c2);
  return res;
};