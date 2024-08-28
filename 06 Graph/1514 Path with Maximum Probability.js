/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 * Dijkstra’s algorithm
 * 从起点开始逐层遍历，记录到达当前node的最大probability, 存储到PriorityQueue
 * 每次遍历从PriorityQueue种取值
 * time: O(N + ElogN)
 * space: O(N+E)
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
  const graph = new Map();
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i], w = succProb[i];

    if (graph.has(a)) graph.get(a).push([b, w]);
    else graph.set(a, [[b, w]]);

    if (graph.has(b)) graph.get(b).push([a, w]);
    else graph.set(b, [[a, w]]);
  }

  if (!graph.has(start_node) || !graph.has(end_node)) return 0;

  const queue = new PriorityQueue({compare: (a, b) => b[1] - a[1]});
  queue.enqueue([start_node, 1]);

  const visited = new Set();
  while (queue.size() > 0) {
    const [node, p] = queue.dequeue();
    if (node === end_node) return p;
    visited.add(node);
    for (const item of graph.get(node)) {
      const [n, w] = item;
      if (visited.has(n)) continue;
      queue.enqueue([n, p * w]);
    }
  }

  return 0;
};