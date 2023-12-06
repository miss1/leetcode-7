/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 * BFS
 * 将每一条route看成一个node，如果两条route相交则说明两个node之间存在一条边
 * eg: routes = [[1,2,7],[3,6,7]], 则，一共有两个node，node1 = [1,2,7], node2 = [3,6,7]. 并且node1和node2之间存在一条边
 * source = 1, target = 6 -> 以node1为起点，求到达node2的最短距离。需要经过两个node，return 2
 * time: O(n * n * m) // routes.length = n, routes[i].length = m
 * space: O(n * m)
 */
var numBusesToDestination = function(routes, source, target) {
  if (source === target) return 0;

  // creat node. O(n)
  const nodes = [];
  let queue = [], end = new Set();
  for (let route of routes) {
    let n = new Set(route);
    if (n.has(source) && n.has(target)) return 1; // 起点终点在同一个node(同一条route)
    if (n.has(source)) queue.push(n);  // 获取bfs的第一层，起点
    if (n.has(target)) end.add(n);  // 获取终点node集合。最后只要到达任意一个node即可
    nodes.push(n);
  }

  // check if exist edge between two route. O(m)
  const hasEdge = (s1, s2) => {
    for (let item of s1) if (s2.has(item)) return true;
    return false;
  }

  // build graph. O(n * n * m)
  const graph = new Map();
  for (let i = 0; i < nodes.length - 1; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (hasEdge(nodes[i], nodes[j])) {
        if (graph.has(nodes[i])) graph.get(nodes[i]).push(nodes[j]);
        else graph.set(nodes[i], [nodes[j]]);

        if (graph.has(nodes[j])) graph.get(nodes[j]).push(nodes[i]);
        else graph.set(nodes[j], [nodes[i]]);
      }
    }
  }

  // BFS O(n * edge)
  let visited = new Set(queue);
  let res = 1;
  while (queue.length > 0) {
    let nextLevel = [];
    for (let n of queue) {
      if (!graph.has(n)) continue;
      for (let nextNode of graph.get(n)) {
        if (visited.has(nextNode)) continue;
        if (end.has(nextNode)) return res + 1;
        nextLevel.push(nextNode);
        visited.add(nextNode);
      }
    }
    queue = nextLevel;
    res++;
  }
  return -1;
};