/**
 * @param {number[][]} graph
 * @return {boolean}
 * BFS
 * 题目其实要求每个node和它的所有neighbor都在不同阵营。
 * 所以可以设置两种状态（阵营）0和1，当前node是0时那下一层的所有node一定是1，再下一层则是0，以此类推
 * BFS遍历图，判断是否存在冲突
 * time: O(N+E)
 * space: O(n)
 */
var isBipartite = function(graph) {
  const n = graph.length;
  let colors = new Array(n).fill(-1), color = 0;
  for (let x = 0; x < n; x++) {
    if (colors[x] !== -1) continue;
    let currentLevel = [x];
    while (currentLevel.length > 0) {
      let nextLevel = [];
      for (let i = 0; i < currentLevel.length; i++) {
        let node = currentLevel[i];
        if (colors[node] !== -1 && colors[node] !== color) return false;
        if (colors[node] === -1) nextLevel.push(...graph[node]);
        colors[node] = color;
      }
      color = color ^ 1;
      currentLevel = [...new Set(nextLevel)];
    }
  }
  return true;
};

/**
 * @param {number[][]} graph
 * @return {boolean}
 * DFS
 */
var isBipartite2 = function(graph) {
  const n = graph.length;
  let colors = new Array(n).fill(-1);

  const dfs = function(node, color) {
    if (colors[node] !== -1 && colors[node] !== color) return false;
    const t = colors[node];
    colors[node] = color;
    if (t === -1) {
      for (let i = 0; i < graph[node].length; i++) {
        const next = graph[node][i];
        if (!dfs(next, color ^ 1)) return false;
      }
    }
    return true;
  };

  for (let x = 0; x < n; x++) {
    if (colors[x] !== -1) continue;
    if (!dfs(x, 0)) return false;
  }
  return true;
};