/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 * Union Find, 其实是求是否所有node都相联通
 * 1: 判断是否只有一个root，不是的话返回-1
 * 2：时间，先将logs按时间排序，然后按照时间顺序做union。取到的最大时间就是答案
 * time: O(n + mlogm + m*α(n))
 * space: O(n + logm)
 */
var earliestAcq = function(logs, n) {
  logs.sort((a, b) => a[0] - b[0]);

  let count = n, time = 0;
  let root = new Array(n).fill(0).map((val, i) => i);
  let rank = new Array(n).fill(1);

  const find = function(a) {
    if (root[a] === a) return a;
    return root[a] = find(root[a]);
  };

  const union = function(x, y, timestamp) {
    let root1 = find(x), root2 = find(y);
    if (root1 !== root2) {
      if (rank[root1] > rank[root2]) root[root2] = root1;
      else if (rank[root1] < rank[root2]) root[root1] = root2;
      else {
        root[root2] = root1;
        rank[root1] += 1;
      }
      time = Math.max(time, timestamp);
      count--;
    }
  };

  for (let log of logs) {
    union(log[1], log[2], log[0]);
  }

  if (count > 1) return -1;
  return time;
};