/**
 * @param {number[][]} isConnected
 * @return {number}
 * 并查集；先初始化，每个元素的父节点为自身，再循环判断，如果两个点之间有线，则合并两个点的根（合并子集）
 * time: O(nlogn) n为矩阵isConnected的大小
 * space: O(n)
 */
var findCircleNum = function(isConnected) {
  let parent = {}, n = isConnected.length, count = n;
  for (let i = 0; i < n; i++) parent[i] = i;

  const find = function(x) {
    if (x !== parent[x]) {
      parent[x] = find(parent[x]);
      return parent[x];
    }
    return x;
  };

  const union = function (p, q) {
    let root1 = find(p), root2 = find(q);
    if (root1 === root2) return;
    parent[root1] = root2;
    count--;
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        union(i, j);
      }
    }
  }

  return count;
};

/**
 * @param {number[][]} isConnected
 * @return {number}
 * disjoint set，先假设provinces的数量等于city的数量count，每次union合并的时候说明减少一个province，count减去1.
 * 最后所有合并操作结束后，剩余的count就是实际的province数量
 * time: O(n²)
 * space: O(n)
 */
var findCircleNum1 = function(isConnected) {
  let count = isConnected.length;
  let root = new Array(count).fill(0).map((val, i) => i);
  let rank = new Array(count).fill(1);

  const find = function(a) {
    if (root[a] === a) return a;
    return root[a] = find(root[a]);
  };

  const union = function(x, y) {
    let rootX = find(x), rootY = find(y);
    if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY]) root[rootY] = rootX;
      else if (rank[rootX] < rank[rootY]) root[rootX] = rootY;
      else {
        root[rootY] = rootX;
        rank[rootX] += 1;
      }
      count--;
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1) union(i, j);
    }
  }
  return count;
};

/**
 * @param {number[][]} isConnected
 * @return {number}
 * 图的DFS遍历
 * time: O(n²)
 * space: O(n)
 */
var findCircleNum2 = function(isConnected) {
  let visited = new Set(), n = isConnected.length;
  let provinces = 0;
  const dfs = function(i) {
    for (let j = 0; j < n; j++) {
      if (!visited.has(j) && isConnected[i][j] === 1) {
        visited.add(j);
        dfs(j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      provinces += 1;
      dfs(i);
    }
  }
  return provinces;
};
