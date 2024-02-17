/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * 要求删除k个数后，还剩下多少个unique integers(计算去重之后还剩下多少)。要求最后剩下的unique integers最少
 * greedy，尽可能的删除更多的unique integers。所以优先删除数量更少的unique integers
 * 先hashmap记录每个数有多少个，然后根据数量排序。从数量少的开始删除
 * time: O(nlogn)
 * space: O(n)
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  let map = new Map();
  for (let a of arr) {
    map.set(a, (map.get(a) || 0) + 1)
  }
  let mapArray = Array.from(map);
  mapArray.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < mapArray.length; i++) {
    if (k < mapArray[i][1]) return mapArray.length - i;
    k -= mapArray[i][1];
  }
  return 0;
};