/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 哈希表，累计nums中每个值的个数，存储到哈希表中。再用set将数组去重，之后sort排序，返回前k个即可
 * time: O(nlogn), sort排序的时间复杂度为O(nlogn)
 * space: O(n)
 */
var topKFrequent = function(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
    else map.set(nums[i], 1);
  }
  let n = [...new Set(nums)];
  n.sort((a,b) => { return map.get(b) - map.get(a); });
  return n.slice(0, k);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * priority queue
 * time: O(nk)
 * space: O(n)
 */
var topKFrequent2 = function(nums, k) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  let pq = [];
  for (let item of map) {
    let start = 0, end = pq.length;
    // logk
    while (start < end) {
      let mid = start + ((end - start) >> 1);
      if (map.get(pq[mid]) < item[1]) end = mid;
      else start = mid + 1;
    }
    // k
    pq.splice(start, 0, item[0]);
    if (pq.length > k) pq.pop();
  }
  return pq;
};