/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 * 先重新创建一个无向图，加一个weight用来记录原先的方向，0为原先的顺序，1为跟原先相反的顺序
 * 从0开始dfs遍历无向图，如果weight为0，则说明需要调转方向， res+1
 * time: O(V+E), V为点的个数，E为图的边的数目
 * space: O(V+E)
 */
var minReorder = function(n, connections) {
  let map = new Map();
  for (let connection of connections) {
    if (map.has(connection[0])) map.get(connection[0]).push({weight: 0, data: connection[1]});
    else map.set(connection[0], [{weight: 0, data: connection[1]}]);
    if (map.has(connection[1])) map.get(connection[1]).push({weight: 1, data: connection[0]});
    else map.set(connection[1], [{weight: 1, data: connection[0]}]);
  }
  let visited = new Set(), res = 0;
  const dfs = function(key) {
    if (visited.size === n) return;
    visited.add(key);
    for (let node of map.get(key)) {
      if (visited.has(node.data)) continue;
      if (node.weight === 0) res += 1;
      dfs(node.data);
    }
  };
  dfs(0);
  return res;
};