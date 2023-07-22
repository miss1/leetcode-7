/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 * Bellman-Ford algorithm
 * dp[k][u] = min(dp[k][u], dp[k - 1][v] + weight(u,v))
 * time: O(k*(N+E))
 * space: O(N+E)
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  let graph = new Map();
  for (let f of flights) {
    if (graph.has(f[1])) graph.get(f[1]).push([f[0], f[2]]);
    else graph.set(f[1], [[f[0], f[2]]]);
  }

  let pre = new Array(n).fill(Infinity);
  pre[src] = 0;

  for (let i = 0; i <= k; i++) {
    let next = new Array(n).fill(Infinity);
    next[src] = 0;
    for (let currNode = 0; currNode < n; currNode++) {
      if (currNode === src || !graph.has(currNode)) continue;
      for (let node of graph.get(currNode)) {
        const [preNode, price] = node;
        next[currNode] = Math.min(next[currNode], pre[preNode] + price);
      }
    }
    pre = next;
  }

  return pre[dst] === Infinity ? -1 : pre[dst];
};

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 * 跟上面一样的解法，不需要另外建立graph，只需要把所有边遍历k遍就行
 * time: O(k*(N+E))
 * space: O(N)
 */
var findCheapestPrice2 = function(n, flights, src, dst, k) {
  let pre = new Array(n).fill(Infinity);
  pre[src] = 0;

  for (let i = 0; i <= k; i++) {
    let next = new Array(n).fill(Infinity);
    next[src] = 0;
    for (let f of flights) {
      const [preNode, currNode, price] = f;
      next[currNode] = Math.min(next[currNode], pre[preNode] + price);
    }
    pre = next;
  }

  return pre[dst] === Infinity ? -1 : pre[dst];
};