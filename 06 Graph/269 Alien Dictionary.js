/**
 * @param {string[]} words
 * @return {string}
 * BFS, Topological sorting
 * 难点在于图的建立，遍历words，比较相邻的两个word，根据他们的之间的大小关系建立graph
 * 注意，题目里没有讲明但是隐藏的条件：
 * "abc" "ab" expected answer ==> ""; "ab" "abc" expected answer ==> "abc" || "acb", "bca", ...
 * 1.当一个字符串，它的前缀排在它后面时，不可能有这种情况，字符串一定会比他的前缀大，所以这种情况返回 ""
 * 2.互相之间没有关联的字符，可以以任意顺序返回
 * 3.当words中只有一个字符时，说明所有字符都不关联，所以只需返回去重之后的这个word
 * time: O(M) words.length * words[i].length
 * space: O(V+E) V: number of letters, E: Number of relations
 */
var alienOrder = function(words) {
  if (words.length === 1) return [...new Set(words[0])].join('');
  // build graph
  let graph = new Map(), indegree = new Map();
  for (let i = 1; i < words.length; i++) {
    let j = 0, w1 = words[i - 1], w2 = words[i], tag = true;
    while (j < w1.length || j < w2.length) {
      if (j < w1.length && j < w2.length) {
        if (!indegree.has(w1[j])) indegree.set(w1[j], 0);
        if (w1[j] !== w2[j]) {
          if (tag) {
            if (graph.has(w1[j])) graph.get(w1[j]).push(w2[j]);
            else graph.set(w1[j], [w2[j]]);

            indegree.set(w2[j], indegree.has(w2[j]) ? indegree.get(w2[j]) + 1 : 1);
            tag = !tag;
          } else {
            if (!indegree.has(w2[j])) indegree.set(w2[j], 0);
          }
        }
      } else if (j < w1.length) {
        if (tag) return "";
        if (!indegree.has(w1[j])) indegree.set(w1[j], 0);
      } else {
        if (!indegree.has(w2[j])) indegree.set(w2[j], 0);
      }
      j++;
    }
  }
  // get 0 in-degree nodes
  let visited = new Set(), current = [];
  for (let item of indegree) {
    if (item[1] === 0) current.push(item[0]);
  }
  // BFS, Topological sorting
  while (current.length > 0) {
    let next = [];
    for (let node of current) {
      visited.add(node);
      if (!graph.has(node)) continue;
      for (let n of graph.get(node)) {
        if (visited.has(n)) continue;
        indegree.set(n, indegree.get(n) - 1);
        if (indegree.get(n) === 0) next.push(n);
      }
    }
    current = next;
  }

  if (visited.size !== indegree.size) return '';
  return [...visited].join('');
};