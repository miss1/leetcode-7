/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 * 其实是要求，给定一组数字（图的每条边），求用这些数字做&操作所得的最小值，要得到最小值只要将所有数字一起做&操作即可
 * 要让&操作的值最小，只要将两个点所在的图中所有边的weight做&操作即可
 * 所以，只要找到所有跟两个点相关连的边，然后做&操作即可
 * UnionFind，对于每个root，同时记录该root的weight（这个component中所有边的w做&操作之后的值）
 * 对于每次query，查找两个点共同的root，该root的weight就是要求的值
 * time: O(n)
 * space: O(n)
 */
var minimumCost = function(n, edges, query) {
  const root = new Array(n).fill(0).map((val, i) => i);
  const rank = new Array(n).fill(1);
  const weight = new Array(n).fill(-1);  //记录每个root最后得到&操作的值

  const find = function(a) {
    if (a === root[a]) return a;
    return root[a] = find(root[a]);
  };

  const union = function(x, y, w) {
    const rootX = find(x);
    const rootY = find(y);

    const wx = weight[rootX] === -1 ? w : weight[rootX];
    const wy = weight[rootY] === -1 ? w : weight[rootY];
    const nw = wx & wy & w;

    if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY]) {
        root[rootY] = rootX;
        weight[rootX] = nw;
      } else if (rank[rootX] < rank[rootY]) {
        root[rootX] = rootY;
        weight[rootY] = nw;
      } else {
        root[rootY] = rootX;
        rank[rootX] += 1;
        weight[rootX] = nw;
      }
    } else {
      weight[rootX] = nw;
    }
  };

  for (let edge of edges) {
    const [x, y, w] = edge;
    union(x, y, w);
  }

  let res = [];
  for (let q of query) {
    if (q[0] === q[1]) {
      res.push(0);
      continue;
    }
    const root1 = find(q[0]);
    const root2 = find(q[1]);
    if (root1 !== root2) res.push(-1);
    else {
      res.push(weight[root1]);
    }
  }
  return res;
};
