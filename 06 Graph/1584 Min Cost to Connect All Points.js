/**
 * @param {number[][]} points
 * @return {number}
 * Minimum Spanning Tree, Kruskal’s Algorithm
 * 先计算出所有点之间的距离，将所有edge和距离记录到数组中
 * 再将edges根据距离大小排序
 * 使用Kruskal’s Algorithm构造Minimum Spanning Tree，通过union-find跳过形成cycle的边
 * time: O(n²logn)
 * space: O(n²)
 */
var minCostConnectPoints = function(points) {
  let edges = [], n = points.length;

  // get all edges and distances, edge = [x, y, distance], O(n * n)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let dis = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
      edges.push([i, j, dis]);
    }
  }
  // sort, O(n²logn²) edges.length = n²
  edges.sort((a, b) => b[2] - a[2]);

  // union-find, check cycle, O(α(N))  which is nearly constant
  let root = new Array(n).fill(0).map((val, idx) => idx);
  let rank = new Array(n).fill(1);

  const find = function(a) {
    if (root[a] === a) return a;
    return root[a] = find(root[a]);
  };

  const union = function(x, y) {
    let r1 = find(x), r2 = find(y);
    if (r1 !== r2) {
      if (rank[r1] > rank[r2]) root[r2] = r1;
      else if (rank[r1] < rank[r2]) root[r1] = r2;
      else {
        root[r2] = r1;
        rank[r1] += 1;
      }
      return true;
    }
    return false;
  };

  // Kruskal’s Algorithm, build minimum spanning tree, O(n*α(N))
  let cost = 0, count = 0;
  while (edges.length > 0 && count < n - 1) {
    const [x, y, dis] = edges.pop();
    if (union(x, y)) {
      cost += dis;
      count++;
    }
  }
  return cost;
};


/**
 * @param {number[][]} points
 * @return {number}
 * Minimum Spanning Tree，Prim’s Algorithm
 * 用数组minDis记录node i到其它node的最小weight
 * 每次循环时先从minDis中找到weight最小的node i，挑出i作为MST的点
 * 再计算出i到所有其它node的weight，将更小值更新到对应的minDis中。
 * 重复以上步骤直到visited.size = n
 * time: O(n²)
 * space: O(n)
 */
var minCostConnectPoints2 = function(points) {
  const n = points.length;
  let visited = new Set(), minDis = new Array(n).fill(Infinity);
  let res = 0;
  minDis[0] = 0;

  while (visited.size < n) {
    let currMinEdge = Infinity, currNode = -1;
    for (let i = 0; i < n; i++) {
      if (!visited.has(i) && currMinEdge > minDis[i]) {
        currMinEdge = minDis[i];
        currNode = i;
      }
    }
    res += currMinEdge;
    visited.add(currNode);
    for (let nextNode = 0; nextNode < n; nextNode++) {
      let nextWeight = Math.abs(points[currNode][0] - points[nextNode][0]) + Math.abs(points[currNode][1] - points[nextNode][1]);
      if (!visited.has(nextNode) && minDis[nextNode] > nextWeight) minDis[nextNode] = nextWeight;
    }
  }
  return res;
};