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