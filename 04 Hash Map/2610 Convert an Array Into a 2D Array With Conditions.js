/**
 * @param {number[]} nums
 * @return {number[][]}
 * Brute force
 * 记录每个数的数量，将该数平均分配给子数组
 * time: O(n*n)
 * space: O(n)
 */
var findMatrix = function(nums) {
  const n = nums.length;
  let arr = new Array(n + 1).fill(0), max = 0;
  for (let n of nums) {
    arr[n] += 1;
    max = Math.max(max, arr[n]);
  }
  let res = new Array(max).fill(0).map(val => []);
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < arr[i]; j++) {
      res[j].push(i);
    }
  }
  return res;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 * 遍历nums，记录当前nums[i]是第几个(eg:num = 1, 第一个1存储到res[0], 第二个1存储到res[1], 第三个1存储到res[2]... 依次类推)
 * hashmap存储key = nums[i], value存储当前累计的数量
 * time: O(n)
 * space: O(n)
 */
var findMatrix2 = function(nums) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const idx = map.has(nums[i]) ? map.get(nums[i]) : 0;
    if (idx >= res.length) res.push([]);
    res[idx].push(nums[i]);
    map.set(nums[i], idx + 1);
  }
  return res;
};