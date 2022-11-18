## 并查集
一种树形的数据结构，用于处理一些不交集（Disjoint Sets）的合并及查询问题。

两个点之间是否至少有一条路径，并查集只能回答两个点之间是否联通，而不能回答具体的联通路径是什么。

### 核心API
* Find(x): 找到x的代表。也就是确定元素属于哪一个子集（找到x的跟节点）
* 两个元素的根相等说明两个元素联通
* Union(x, y): 将x的代表和y的代表进行合并，也就是将两个子集合并成同一个集合

### 不带权并查集
```javascript
var uf = function (m) {
  this.parent = {};
  this.size = {}; // 是一个哈希表，记录每一个联通域的大小，其中 key 是联通域的根，value 是联通域的大小
  // 初始化，每个元素的父节点为自身
  for (let i = 0; i < m; i++) {
    this.parent[i] = i;
    this.size[i] = 1;
  }
};

uf.prototype.find = function (x) {
  if (x !== this.parent[x]) {
    this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  return x;
};

uf.prototype.union = function (self, p, q) {
  if (this.connected(p, q)) return;
  let rootP = this.find(p);
  let rootQ = this.find(q);
  // 小的树挂到大的树上， 使树尽量平衡
  if (this.size(rootP) < this.size(rootQ)) {
    this.parent[rootP] = rootQ;
    this.size[rootQ] += this.size[rootP];
  } else {
    this.parent[rootQ] = rootP;
    this.size[rootP] += this.size[rootQ];
  }
};

uf.prototype.connected = function (p, q) {
  return this.find(p) === this.find(q);
};
```

