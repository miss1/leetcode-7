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
