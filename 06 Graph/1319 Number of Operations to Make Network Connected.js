/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 * 求联通分量的个数，n个联通分量需要n-1条线连接
 * time: union：O(logx) x,合并的次数，find：O(logy) y,查找的次数
 * space: O(n)
 */
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) return -1;
  let parent = Array.from({length: n}, (v, i) => i);
  let count = n;
  const find = function(x) {
    if (x !== parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  const union = function(p, q) {
    let root1 = find(p), root2 = find(q);
    if (root1 !== root2) {
      parent[root1] = root2;
      count--;
    }
  };

  for (let connection of connections) {
    union(...connection);
  }

  return count - 1;
};
