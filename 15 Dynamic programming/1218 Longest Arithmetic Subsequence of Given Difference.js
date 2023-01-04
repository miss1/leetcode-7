/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 * 暴力解法。超时
 * 遍历数组arr，求出以当前数字为结尾的子串中，满足条件的最大长度，存储到新数组count中
 * 将当前数字与所有前面的数字比较，当差值等于difference时，记录当前的count = 1 + count[j]
 * time: O(n²)
 * space: O(n)
 */
var longestSubsequence = function(arr, difference) {
  let res = 1;
  let count = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    let n = 1;
    for (let j = 0; j < i; j ++) {
      if (arr[i] - arr[j] === difference) n = Math.max(count[j] + 1, n);
    }
    count[i] = n;
    res = Math.max(res, n);
  }
  return res;
};

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 * 上面解法的优化，思路是一样的，改为用map记录以每个数字结尾时，满足条件的最大长度
 * 对于每个num，只要找到对应差值的那个数，之前所记录的长度即可
 * time: O(n)
 * space: O(n)
 */
var longestSubsequence2 = function(arr, difference) {
  let map = new Map();
  let res = 1;
  for (let n of arr) {
    let prev = map.has(n - difference) ? map.get(n - difference) : 0;
    map.set(n, prev + 1);
    res = Math.max(map.get(n), res);
  }
  return res;
};