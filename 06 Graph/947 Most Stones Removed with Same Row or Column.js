/**
 * @param {number[][]} stones
 * @return {number}
 * 遍历stones，如果两个stone在the same row or the same column，则说明存在一条边
 * union find确定一共有多少个root，root的数量就是删除所有stone之后剩下的stone数
 * time: O(n*n)
 * space: O(n)
 */
var removeStones = function(stones) {
  const root = new Array(stones.length).fill(0).map((_val, idx) => idx);
  const rank = new Array(stones.length).fill(0);
  let count = stones.length;

  const find = (a) => {
    if (root[a] === a) return a;
    return root[a] = find(root[a]);
  };

  const union = (x, y) => {
    const rootX = find(x), rootY = find(y);
    if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY]) root[rootY] = rootX;
      else if (rank[rootX] < rank[rootY]) root[rootX] = rootY;
      else {
        root[rootY] = rootX;
        rank[rootX]++;
      }
      count--;
    }
  };

  for (let i = 0; i < stones.length - 1; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        union(i, j);
      }
    }
  }

  return stones.length - count;
};