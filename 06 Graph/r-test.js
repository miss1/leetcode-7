

/**
 * disjoint set
 * 用root记录每个node的root值，数组，下标为node，value为root
 * 用rank记录每个顶点的高度，每次合并两个顶点时，根据rank来决定哪个点作为root，可以限制整个树的高度
 */
class UnionFind {
  // O(n)
  constructor(size) {
    this.root = new Array(size).fill(0).map((val, i) => i);
    this.rank = new Array(size).fill(1);
  }
  // O(α(N)), regarded as O(1) on average.
  find(a) {
    if (a === this.root[a]) return a;
    return this.root[a] = this.find(this.root[a]); // root[a] = find(root[a]); return root[a];
  }
  // O(α(N))
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) this.root[rootY] = rootX;
      else if (this.rank[rootX] < this.rank[rootY]) this.root[rootX] = rootY;
      else {
        this.root[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }
  // O(α(N))
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

let uf = new UnionFind(10);

/**
 * 带权 disjoint set
 * map = {node: [root, weight]}
 * LC399
 */
class UnionFind2 {
  constructor() {
    this.map = new Map();
  }

  find(a) {
    if (!map.has(a)) map.set(a, [a, 1]);
    const [entryRoot, entryValue] = map.get(a);

    if (entryRoot !== a) {
      const [newEntryRoot, newEntryVal] = this.find(entryRoot);
      map.set(a, [newEntryRoot, entryValue * newEntryVal]);
    }
    return map.get(a);
  }

  union(x, y, value) {
    const [rootX, xWeight] = this.find(x);
    const [rootY, yWeight] = this.find(y);
    if (rootX !== rootY) {
      map.set(rootX, [rootY, yWeight * value / xWeight]);
    }
  }
}

