/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 * Union-Find + Kruskal’s Algorithm 建立Minimum Spanning Tree
 * 对于每一个点，可以选择在该点打井或者通过pipe连接其它点
 * 建立一个虚拟的点0，这个点跟所有点都直接相连，并且weight值为对应的点打井所需要的cost
 * 然后Kruskal’s Algorithm + Union-Find建立Minimum Spanning Tree。同时计算总的cost
 * time: O((N+M) * log(N+M)) sorting
 * space: O(N+M)
 */
var minCostToSupplyWater = function(n, wells, pipes) {
  // union-find
  let root = new Array(n + 1).fill(0).map((val, idx) => idx);
  let rank = new Array(n + 1).fill(1);

  const find = function(a) {
    if (root[a] === a) return a;
    return root[a] = find(root[a]);
  };

  const union = function(x, y) {
    let root1= find(x), root2 = find(y);
    if (root1 === root2) return false;
    if (rank[root1] > rank[root2]) root[root2] = root1;
    else if (rank[root1] < rank[root2]) root[root1] = root2;
    else {
      root[root2] = root1;
      rank[root1] += 1;
    }
    return true;
  };

  // get all edges, sorting
  let orderedEdges = [];
  for (let i = 0; i < wells.length; i++) {
    orderedEdges.push([0, i + 1, wells[i]]);
  }
  for (let i = 0; i < pipes.length; i++) {
    orderedEdges.push([...pipes[i]]);
  }
  orderedEdges.sort((a, b) => a[2] - b[2]);

  let totalCost = 0;
  for (let e of orderedEdges) {
    const [h1, h2, cost] = e;
    if (union(h1, h2)) {
      totalCost += cost;
    }
  }
  return totalCost;
};