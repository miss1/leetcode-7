## 图

### 图的建立

邻接矩阵(Adjacency Matrix)
* 使用一个n*n的矩阵来描述图
* 二维数组表示
* 无权图，n[i][j] 表示i到j之间有无边，从i指向j。
* 对于有权图，n[i][j]中可以存储权重

邻接表(Adjacency List)
* 对于每个点，存储一条链表，用来指向所有与该点直接相连的点
* 对于有权图，链表中值对应权重

### 图的遍历

* 深度优先遍历。从图中某顶点出发，不断访问邻居，邻居的邻居，直到访问完毕
* 广度优先遍历
* 可参考 841 题

### 常见算法
* Dijkstra 算法。单源最短路径
* Floyd-Warshall 算法。多源最短路径
* 拓扑排序
* Kahn 算法
...

### Union-Find（disjoint set）
* 一种树形的数据结构，用于处理一些不交集（Disjoint Sets）的合并及查询问题。
* 让所有连接的顶点具有相同的父节点或者根节点。要检查两个顶点是否相连，只需检查他们是否具有相同的根节点
* 两个点之间是否至少有一条路径，并查集只能回答两个点之间是否联通，而不能回答具体的联通路径是什么。

核心API
* Find(x): 找到x的代表。也就是确定元素属于哪一个子集（找到x的根节点）
* 两个元素的根相等说明两个元素联通
* Union(x, y): 将x的代表和y的代表进行合并，也就是将两个子集合并成同一个集合，让他们具有相同的根节点
* Connected(x, y): 检查两个顶点是否相连

不带权并查集
```javascript
/**
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
```

场景
* 判断有多少个root(component数量)；每次union合并的时候减少一个node，最后剩下的node数量就是root数量
* 判断环；当两个点具有相同的root时，如果这两个点直接相连，说明存在环
* 261, 323, 547, 1101, 1202, 1319


### connected component
求图有多少个component(单独的模块，不跟其它模块相连)
* DFS or BFS遍历 or disjoint set
* 做dfs或bfs遍历时，我们首先要遍历n个node，以当前node为起点往下走，如果该node已经走过则跳过
* 每次重新开始一个起点往下走时，说明就是在遍历一个新的component
* 当component中一共有n个点，且任意两个点之间都有一条线时，线的数量为：line = n(n-1)/2
* 323, 547, 2685

### 判断图是否是有效树
* 判断一个graph是否是一个有效树，同时满足两点
* 1：只有一个connected component； 
* 2：graph中不存在环（line = n - 1,树的概念(无向图)）
* 261

### Topological sorting & Kahn's Algorithm
* Kahn's Algorithm: keeping track of the number of incoming edges into each node (in-degree)
* 先计算每个node的in-degree和out-degree. in-degree为0，说明当前可以访问该node
* 将in-degree为0的node加入queue，删除该node并且更新与其相关连的node的in-degree。直到没有node的in-degree为0
* 如果没有node的in-degree为0，并且存在没有遍历过的node，说明存在环
* Topological sorting只适用于有向图和无环图（需要有in-degree为0的node作为起点）
* 210,269,1136,310, Topological sorting
* 207, 判断有没有环，做一遍Topological sorting，如果不能遍历完所有node，说明有环

### 判断两个点之间是否存在路径
* 回溯的思路
* 从起点开始，dfs寻找，直到找到目标点
* 如果一条路走完还没有找到，则返回上一节点走其它分支
* 如果需要计算两点之间的距离，对于每一个选择，计算它的距离，返回
* 399