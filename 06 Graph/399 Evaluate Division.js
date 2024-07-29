/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 * 先用哈希表建立图，对于每两个点，记录两条边，值为两个点之间的乘积关系
 * eg: [["a","b"],["b","c"]],[2.0,3.0] -> graph = {a: {b: 2}, b: {a: 1/2, c: 3}, c: {b: 1/3}}
 * 建立好图之后，我们要做的就是检查两个点之间是否存在路径，存在的话计算路径中每个点的乘积，并返回
 * 使用回溯（DFS）遍历图寻找路径
 * time: O(M*N) M: queries的个数，N: equations的个数
 * space: O(N)
 */

var calcEquation = function(equations, values, queries) {
  // build graph
  let graph = new Map();
  for (let i = 0; i < equations.length; i++) {
    let n1 = equations[i][0], n2 = equations[i][1], value = values[i];
    if (!graph.has(n1)) graph.set(n1, new Map());
    if (!graph.has(n2)) graph.set(n2, new Map());
    graph.get(n1).set(n2, value);
    graph.get(n2).set(n1, 1/value);
  }
  // backtrack search
  const backtrackEvaluate = function(currentNode, targetNode, product, visited) {
    visited.add(currentNode);
    let ret = -1;
    let neighbors = graph.get(currentNode);
    if (neighbors.has(targetNode)) {
      ret = product * neighbors.get(targetNode);
    } else {
      for (let item of neighbors) {
        let nextNode = item[0];
        if (visited.has(nextNode)) continue;
        ret = backtrackEvaluate(nextNode, targetNode, product * item[1], visited);
        if (ret !== -1) break;
      }
    }
    visited.delete(currentNode);
    return ret;
  };
  // search queries
  let result = [];
  for (let querie of queries) {
    if (!graph.has(querie[0]) || !graph.has(querie[1])) {
      result.push(-1);
    } else if (querie[0] === querie[1]) {
      result.push(1);
    } else {
      let visited = new Set();
      result.push(backtrackEvaluate(querie[0], querie[1], 1, visited));
    }
  }
  return result;
};

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 * BFS
 * 先建立graph，再BFS查找两个点之间的路径
 */
var calcEquation2 = function(equations, values, queries) {
  const graph = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [n1, n2] = equations[i];
    if (graph.has(n1)) graph.get(n1).push([n2, values[i]]);
    else graph.set(n1, [[n2, values[i]]]);

    if (graph.has(n2)) graph.get(n2).push([n1, 1/values[i]]);
    else graph.set(n2, [[n1, 1/values[i]]]);
  }

  const bfs = (start, target) => {
    if (!graph.has(start) || !graph.has(target)) return -1;
    if (start === target) return 1;

    let current = [[start, 1]], visited = new Set([start]);
    while (current.length > 0) {
      let next = [];
      for (let [node, val] of current) {
        for (let [n, v] of graph.get(node)) {
          if (visited.has(n)) continue;
          if (n === target) return val * v;
          visited.add(n);
          next.push([n, val * v]);
        }
      }
      current = next;
    }
    return -1;
  };

  const res = [];
  for (let [s, e] of queries) {
    res.push(bfs(s, e));
  }
  return res;
};

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 * 带权 Union-Find
 * 建立Union-Find，让被除数作为root，并且记录每个点到root的weight(root的倍数，root乘以多少会等于该node)，eg: a/b=3, b为root，a的weight为3
 * 对与c/d, 如果c和d在有同一个根节点，c/d = c到root的weight/d到root的weight
 */
var calcEquation3 = function(equations, values, queries) {
  let map = new Map;
  const find = function(root) {
    if (!map.has(root)) map.set(root, [root, 1]);
    const [entryRoot, entryValue] = map.get(root);

    if (entryRoot !== root) {
      const [newEntryRoot, newEntryVal] = find(entryRoot);
      map.set(root, [newEntryRoot, entryValue * newEntryVal]);
    }
    return map.get(root);
  };
  const union = function(dividend, divisor, value) {
    const [dividendGid, dividendVal] = find(dividend);
    const [divisorGid, divisorVal] = find(divisor);

    if (dividendGid !== divisorVal) {
      map.set(dividendGid, [divisorGid, divisorVal * value / dividendVal]);
    }
  };

  for (let i = 0; i < equations.length; i++) {
    union(equations[i][0], equations[i][1], values[i]);
  }

  let res = [];
  for (let q of queries) {
    if (!map.has(q[0]) || !map.has(q[1])) res.push(-1.0);
    else {
      const [dividendGid, dividendVal] = find(q[0]);
      const [divisorGid, divisorVal] = find(q[1]);
      if (dividendGid !== divisorGid) res.push(-1.0);
      else res.push(dividendVal / divisorVal);
    }
  }
  return res;
};