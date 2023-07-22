/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 * Dijkstra’s algorithm 寻找单源最短路径
 * 用priority queue存储node到source node的距离，pq = [[node, distance]]
 * 每次从priority queue中取distance最小的node，往下寻找
 * time: O(N+ElogN)
 * space: O(N+E)
 */
var networkDelayTime = function(times, n, k) {
  let graph = new Map();
  for (let t of times) {
    if (graph.has(t[0])) graph.get(t[0]).push([t[1], t[2]]);
    else graph.set(t[0], [[t[1], t[2]]]);
  }

  let arr = new Array(n + 1).fill(Infinity), pq = [[k, 0]];
  arr[k] = 0;

  const insetPq = function(val) {
    let low = 0, high = pq.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (pq[mid][1] < val[1]) high = mid;
      else low = mid + 1;
    }
    pq.splice(low, 0, val);
  };

  while (pq.length > 0) {
    const [currNode, currTime] = pq.pop();
    if (currTime > arr[currNode] || !graph.has(currNode)) continue;

    for (let item of graph.get(currNode)) {
      const [newNode, newTime] = item;
      if (currTime + newTime < arr[newNode]) {
        arr[newNode] = currTime + newTime;
        insetPq([newNode, arr[newNode]]);
      }
    }
  }

  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (arr[i] === Infinity) return -1;
    res = Math.max(res, arr[i]);
  }
  return res;
};